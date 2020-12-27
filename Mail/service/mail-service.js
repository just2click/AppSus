import { storageService } from '../../service/storage-service.js'
import { utilsService } from '../../service/utils-service.js'


const MAILS_KEY = "mailDB";
export const mailService = {
    query,
    remove,
    getById,
    add,
    send,
    changeToPref,
    changeToRead,
    tagAsSend
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
        { id: utilsService.makeId(), type: 'income', address: 'Nadav@gmail.com', subject: 'Hello all!', body: `Hi and welcome to our mail app`, isStarred: true, isRead: 'unread', sentAt: 1659833930320, isPref: false },
        { id: utilsService.makeId(), type: 'outcome', address: 'Adina@gmail.com', subject: 'Check it out!', body: 'Check my Keep app', isStarred: true, isRead: 'unread', sentAt: 1551155690578, isPref: false },
        { id: utilsService.makeId(), type: 'draft', address: 'Alon@gmail.com', subject: 'lets do it!', body: 'Pick up!', isStarred: false, isRead: 'unread', sentAt: 1551133930594, isPref: false },
        { id: utilsService.makeId(), type: 'income', address: 'Nadav@gmail.com', subject: 'Hello all!', body: `Hi and welcome to our mail app`, isStarred: true, isRead: 'unread', sentAt: 1659833930320, isPref: false },
        { id: utilsService.makeId(), type: 'outcome', address: 'Adina@gmail.com', subject: 'Check it out!', body: 'Check my Keep app', isStarred: true, isRead: 'unread', sentAt: 1551155690578, isPref: false },
        { id: utilsService.makeId(), type: 'draft', address: 'Alon@gmail.com', subject: 'lets do it!', body: 'Pick up!', isStarred: false, isRead: 'unread', sentAt: 1551133930594, isPref: false },
    ]
    return mails
}


function _saveMailsToStorage() {
    storageService.save(MAILS_KEY, gMails)
}

function remove(mailId) {
    gMails = gMails.filter(mail => mail.id !== mailId);
    _saveMailsToStorage();
    return Promise.resolve();
}

function send(mail) {
    mail = {
        id: utilsService.makeId(),
        ...mail
    }
    gMails = [mail, ...gMails]
    _saveMailsToStorage()
    return Promise.resolve(mail)
}

function add(mail) {
    const mailToAdd = {
        id: utilsService.makeId(),
        ...mail
    };
    gMails = [mailToAdd, ...gMails];
    _saveMailsToStorage();
    return Promise.resolve(mailToAdd);
}

function getById(mailId) {
    const mail = gMails.find(mail => mail.id === mailId);
    return Promise.resolve(mail);
}


function query() {
    return Promise.resolve(gMails)
}

function changeToPref(mail) {

    const mailsCopy = [...gMails]
    const mailIdx = mailsCopy.findIndex(currMail => currMail.id === mail.id)
    const mailToUpdate = { ...mail }
    mailToUpdate.isPref = mailToUpdate.isPref ? false : true
    mailToUpdate.type = (mailToUpdate.type.includes('pref')) ? mailToUpdate.type : mailToUpdate.type + 'pref'
    mailsCopy[mailIdx] = mailToUpdate
    gMails = mailsCopy
    console.log('thePref', mailToUpdate);
    _saveMailsToStorage()
    return Promise.resolve(gMails)
}

function changeToRead(mail) {
    const mailsCopy = [...gMails]
    const mailIdx = mailsCopy.findIndex(currMail => currMail.id === mail.id)
    const mailToUpdate = { ...mail }
    mailToUpdate.isPref = mailToUpdate.isPref ? false : true
    mailToUpdate.type = (mailToUpdate.type.includes('read')) ? mailToUpdate.type : mailToUpdate.type + 'read'
    mailsCopy[mailIdx] = mailToUpdate
    gMails = mailsCopy
    _saveMailsToStorage()
    return Promise.resolve(gMails)
}

function tagAsSend(mail) {
    const mailsCopy = [...gMails]
    const mailIdx = mailsCopy.findIndex(currMail => currMail.id === mail.id)
    const mailToUpdate = { ...mail }
    mailToUpdate.isPref = mailToUpdate.isPref ? false : true
    mailToUpdate.type = (mailToUpdate.type.includes('sent')) ? mailToUpdate.type : mailToUpdate.type + 'sent'
    mailsCopy[mailIdx] = mailToUpdate
    gMails = mailsCopy
    _saveMailsToStorage()
    return Promise.resolve(gMails)
}

















//  Later?:

// sendMail,
// getMailById,
// updateMail,
// sendToDrafts,
// countUnreadMails,