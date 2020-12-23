import { storageService } from '../../service/storage-service.js'
import { utilsService } from '../../service/utils-service.js'


const MAILS_KEY = "mailDB";
export const mailService = {
    query,
}

var gMails;

_createMails()

function _createMails() {
    gMails = storageService.load(MAILS_KEY)
    if (!gMails || !gMails.length) {
        gMails = _getDemoMails()
        _saveMailsToStorage()
    }
}

function _getDemoMails() {

    const mails = [
        { id: utilsService.makeId(), type: 'income', address: 'Nadav@gmail.com', subject: 'Hello all!', body: `Hi and welcome to our mail app`, isStarred: true, isRead: false, sentAt: 1659833930320 },
        { id: utilsService.makeId(), type: 'income', address: 'Adina@gmail.com', subject: 'Check it out!', body: 'Check my Keep app', isStarred: true, isRead: false, sentAt: 1551155690578 },
        { id: utilsService.makeId(), type: 'outcome', address: 'Alon@gmail.com', subject: 'lets do it!', body: 'Pick up!', isStarred: false, isRead: false, sentAt: 1551133930594 },
        { id: utilsService.makeId(), type: 'draft', address: 'Alon@gmail.com', subject: 'lets do it!', body: 'Pick up!', isStarred: false, isRead: false, sentAt: 1551133930594 },
    ]
    return mails
}

function _saveMailsToStorage() {

    storageService.save(MAILS_KEY, gMails)

}


function query() {
    return Promise.resolve(gMails)
}


















//  Later?:

// sendMail,
// getMailById,
// updateMail,
// sendToDrafts,
// countUnreadMails,