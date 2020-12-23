import { utilService } from '../../service/utils-service.js'
import { storageService } from '../../service/storage-service.js'

const KEY = 'notedDB'

export const noteService = {
    query,
    getNoteById,
    getNotesTypes,
    remove
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

function _getDemoNotes() {
    const notes = [{
            id: 'i101',
            type: 'text'
        },
        {
            id: 'i102',
            type: 'text'
        },
        {
            id: 'i103',
            type: 'text'
        }
    ]
    return notes
}

function getNotesTypes() {
    var notesTypes = {
        title: '',
        cmps: [{
                type: 'textNote'
            },
            {
                type: 'imgNote'
            },
            {
                type: 'todoesNote'
            },
            {
                type: 'videoNote'
            }
        ]
    }
    return Promise.resolve(notesTypes)
}