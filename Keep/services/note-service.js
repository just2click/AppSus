import { storageService } from '../../service/storage-service.js'
import { utilsService } from '../../service/utils-service.js'


const KEY = 'notedDB'

export const noteService = {
    query,
    remove,
    addNote,
    changeUrl,
    changeColor,
    changeTitle,
    changeTxt,
    todoClicked,
    addTodo,
    removeTodo,
    changeLabel,
    addPin
}

var gNotes;
_createNotes();


function _createNotes() {
    gNotes = storageService.load(KEY)
    if (!gNotes || !gNotes.length) {
        gNotes = _getDemoNotes()
        _saveNotesToStorage();
    }
}

function addNote(newNote) {
    var newInfo = {}
    switch (newNote.type) {
        case "NoteText":
            newInfo.txt = newNote.note
            break;
        case "NoteImg" || "NoteVideo" || "NoteAudio":
            newInfo.url = newNote.note
            break;
        case "NoteTodos":
            var todosTxt = newNote.note.split(',')
            newInfo.todos = todosTxt.reduce((acc, todo) => {
                acc.push({ txt: todo, doneAt: null })
                return acc
            }, [])
            break
    }
    const newNoteToAdd = { color: '#f1f1f1', id: utilsService.makeId(), type: newNote.type, info: newInfo }
    gNotes = [newNoteToAdd, ...gNotes]
    _saveNotesToStorage()

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your note has been saved',
        showConfirmButton: false,
        timer: 1500
    })
    return Promise.resolve(gNotes)
}

function query() {
    return Promise.resolve(gNotes)
}

function _getDemoNotes() {
    const notes = [{
            color: '#f1f1f1',
            type: 'NoteText',
            isPinned: true,
            id: utilsService.makeId(),
            info: {
                txt: "Fullstack Me Baby!"
            },
            isPinned: false
        },
        {
            color: '#f1f1f1',
            type: 'NoteImg',
            id: utilsService.makeId(),
            info: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Smooth_Collie_600.jpg/330px-Smooth_Collie_600.jpg',
                title: 'nice picture!!'
            },
            isPinned: true
        },
        {
            color: '#f1f1f1',
            type: 'NoteTodos',
            id: utilsService.makeId(),
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", id: utilsService.makeId(), doneAt: null, isDone: false },
                    { txt: "Do this", id: utilsService.makeId(), doneAt: 187111111, isDone: false }
                ]
            },
            decoration: 'line-through',
            isPinned: true
        },
        {
            color: '#F1F1F1',
            type: 'NoteVideo',
            id: utilsService.makeId(),
            info: {
                url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
                title: "nice vid!!"
            },
            isPinned: false,
        },
        // {
        //     color: '#F1F1F1',
        //     type: 'NoteAudio',
        //     id: utilsService.makeId(),
        //     info: {
        //         url: '',
        //     },
        //     isPinned: false
        // },
        {
            color: '#f1f1f1',
            type: 'NoteText',
            isPinned: false,
            id: utilsService.makeId(),
            info: {
                txt: 'It was hard but it worth it!! thanks for everything!'
            },
            isPinned: false
        }


    ]
    return notes
}

function _saveNotesToStorage() {
    storageService.save(KEY, gNotes)
}

function remove(noteId) {
    Swal.fire(
        'Deleted!',
        'Your note has been deleted.',
        'warning'
    )
    gNotes = gNotes.filter(note => note.id !== noteId)
    _saveNotesToStorage()
    return Promise.resolve()
}

function changeUrl(note, url, ev) {
    console.log('ev:', ev);
    const noteToUpdate = {
        ...note,
        info: {
            url
        }
    }
    console.log('updated:', noteToUpdate);
    const notesCopy = [...gNotes]
    const noteIdx = notesCopy.findIndex(currNote => note.id === currNote.id)

    notesCopy[noteIdx] = noteToUpdate
    console.log(notesCopy, 'notesCopy');
    gNotes = notesCopy

    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function changeTitle(note, title, url, ev) {
    console.log('ev:', ev);
    const noteToUpdate = {
        ...note,
        info: {
            url,
            title
        }
    }
    const notesCopy = [...gNotes]
    const noteIdx = notesCopy.findIndex(currNote => note.id === currNote.id)

    notesCopy[noteIdx] = noteToUpdate
    gNotes = notesCopy

    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function changeLabel(note, label, todos) {
    const noteToUpdate = {
        ...note,
        info: {
            label,
            todos
        }
    }
    const notesCopy = [...gNotes]
    const noteIdx = notesCopy.findIndex(currNote => note.id === currNote.id)

    notesCopy[noteIdx] = noteToUpdate
    gNotes = notesCopy
    console.log('gNotes:', gNotes);
    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function changeTxt(note, txt, ev) {
    console.log('ev:', ev);
    const noteToUpdate = {
        ...note,
        info: {
            txt
        }
    }
    const notesCopy = [...gNotes]
    const noteIdx = notesCopy.findIndex(currNote => note.id === currNote.id)

    notesCopy[noteIdx] = noteToUpdate
    gNotes = notesCopy

    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function todoClicked(note, todoId, ev) {
    console.log('ev:', ev);
    const notesCopy = [...gNotes]
    const noteIdx = notesCopy.findIndex(currNote => note.id === currNote.id)
    const noteToUpdate = {...note }
    const todoIdx = noteToUpdate.info.todos.findIndex(currTodo => todoId === currTodo.id)
    noteToUpdate.info.todos[todoIdx].isDone = noteToUpdate.info.todos[todoIdx].isDone ? true : false
    noteToUpdate.info.todos[todoIdx].doneAt = new Date().toLocaleString()
    notesCopy[noteIdx] = noteToUpdate
    gNotes = notesCopy

    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}


function addTodo(note, todo, ev) {
    console.log(ev);
    const notesCopy = [...gNotes]
    const noteIdx = notesCopy.findIndex(currNote => note.id === currNote.id)
    const noteToUpdate = {...note }
    noteToUpdate.info.todos.push({ txt: todo + '                    ', id: utilsService.makeId(), isDone: false, doneAt: null })
    notesCopy[noteIdx] = noteToUpdate
    gNotes = notesCopy
    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function removeTodo(note, todoId) {
    const notesCopy = [...gNotes]
    const noteIdx = notesCopy.findIndex(currNote => note.id === currNote.id)
    const noteToUpdate = {...note }
    noteToUpdate.info.todos = noteToUpdate.info.todos.filter(todo => todo.id !== todoId)
    notesCopy[noteIdx] = noteToUpdate

    gNotes = notesCopy
    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function addPin(note) {
    const noteToUpdate = {...note }
    const notesCopy = [...gNotes]
    const noteIdx = notesCopy.findIndex(currNote => note.id === currNote.id)

    notesCopy[noteIdx] = noteToUpdate
    noteToUpdate.isPinned = noteToUpdate.isPinned ? false : true
    console.log('updateNote:', noteToUpdate);
    gNotes = notesCopy
    _saveNotesToStorage();

    return Promise.resolve(gNotes)
}

function changeColor(note, color) {

    const noteToUpdate = {
        ...note,
        color
    }

    const notesCopy = [...gNotes]
    const noteIdx = notesCopy.findIndex(currNote => note.id === currNote.id)

    notesCopy[noteIdx] = noteToUpdate
    gNotes = notesCopy
    _saveNotesToStorage();

    return Promise.resolve(gNotes)
}