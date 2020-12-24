import { storageService } from '../../service/storage-service.js'
import { utilsService } from '../../service/utils-service.js'


const KEY = 'notedDB'

export const noteService = {
    query,
    // getNoteById,
    // getNotesTypes,
    remove,
    // add,
    addNote
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
    console.log('adding new note', newNote);
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
    const newNoteToAdd = { id: utilsService.makeId(), type: newNote.type, info: newInfo }
    gNotes = [newNoteToAdd, ...gNotes]
    console.log(newInfo)
    _saveNotesToStorage()
    return Promise.resolve(gNotes)
}

function query() {
    return Promise.resolve(gNotes)
}

function _getDemoNotes() {
    const notes = [{
            type: 'NoteText',
            isPinned: true,
            id: utilsService.makeId(),
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            type: 'NoteImg',
            id: utilsService.makeId(),
            info: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Robert_Bunsen.jpg',
                title: 'nice picture!!'
            },
            style: {
                backgroundColor: 'green'
            }
        },
        {
            type: 'NoteTodos',
            id: utilsService.makeId(),
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        },
        {
            type: 'NoteVideo',
            id: utilsService.makeId(),
            info: {
                url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
                title: "nice vid!!"
            },
            style: {
                backgroundColor: "#00d"
            }
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
    console.log('removing', noteId);

    gNotes = gNotes.filter(note => note.id !== noteId)
    _saveNotesToStorage()
    return Promise.resolve()
}