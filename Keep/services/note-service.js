import { storageService } from '../../service/storage-service.js'
import { utilsService } from '../../service/utils-service.js'


const KEY = 'notedDB'

export const noteService = {
    query,
    // getNoteById,
    // getNotesTypes,
    remove,
    // add,
    addNote,
    changeUrl,
    changeColor,
    changeTitle,
    changeTxt,
    todoClicked,
    addTodo,
    removeTodo
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
        case "NoteImg" || "NoteVideo":
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
        // const Toast = Swal.mixin({
        //     toast: true,
        //     position: 'top-end',
        //     showConfirmButton: false,
        //     timer: 3000,
        //     timerProgressBar: true,
        //     didOpen: (toast) => {
        //         toast.addEventListener('mouseenter', Swal.stopTimer)
        //         toast.addEventListener('mouseleave', Swal.resumeTimer)
        //     }
        // })

    // Toast.fire({
    //     icon: 'success',
    //     title: 'Signed in successfully'
    // })
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
                url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Robert_Bunsen.jpg',
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
            isPinned: false
        }


    ]
    return notes
}

// function getNoteById(noteId) {
//     return noteService.find(note => note.id === noteId)
// }

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

function changeTitle(note, title, ev) {
    console.log('ev:', ev);
    const noteToUpdate = {
        ...note,
        info: {
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
    notesCopy[noteIdx] = noteToUpdate
    console.log(notesCopy, 'notesCopy');
    gNotes = notesCopy

    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}


function addTodo(note, todo, ev) {
    console.log(ev);
    const notesCopy = [...gNotes]
    const noteIdx = notesCopy.findIndex(currNote => note.id === currNote.id)
    const noteToUpdate = {...note }
    noteToUpdate.info.todos.push({ txt: todo, id: utilsService.makeId(), isDone: false, doneAt: null })
    notesCopy[noteIdx] = noteToUpdate
    console.log(notesCopy, 'notesCopy');
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
    console.log(notesCopy, 'notesCopy');
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