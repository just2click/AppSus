import { utilService } from '../../service/utils-service.js'
import { storageService } from '../../service/storage-service.js'


const KEY = 'notedDB'

export const noteService = {
    query,
    getNoteById,
    // getNotesTypes,
    remove,
    add
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

function query() {
    return Promise.resolve(gNotes)
}

function getNoteById(noteId) {
    return noteService.find(note => note.id === noteId)
}

function _saveNotesToStorage() {
    storageService.save(KEY, gNotes)
}

function remove(noteId) {
    gNotes = gNotes.filter(note => note.id !== noteId)
    _saveNotesToStorage()
    return Promise.resolve()
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function add(note) {
    const noteToAdd = {
        id: makeId(),
        type: note.type
            // ...note
    }
    gNotes = [noteToAdd, ...gNotes]
    _saveNotesToStorage()
    return Promise.resolve(noteToAdd)

}

function _getDemoNotes() {
    const notes = [{
            type: 'textNote',
            isPinned: true,
            id: 'i101',
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            type: 'imgNote',
            id: 'i102',
            info: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Robert_Bunsen.jpg',
                title: 'nice picture'
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            type: 'todoesNote',
            id: 'i103',
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        },
        {
            type: 'videoNote',
            info: {
                url: 'https://www.youtube.com/watch?v=vXlm36Nf82I'
            }
        }


    ]
    return notes
}

// function getNotesTypes() {
//     const notesTypes = {
//         title: '',
//         cmps: [{
//                 type: 'textNote'
//             },
//             {
//                 type: 'imgNote'
//             },
//             {
//                 type: 'todoesNote'
//             },
//             {
//                 type: 'videoNote'
//             }
//         ]
//     }
//     return Promise.resolve(notesTypes)
// }