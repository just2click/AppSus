import { storageService } from '../../service/storage-service.js'
import { utilsService } from '../../service/utils-service.js'


const MAILS_KEY = "mailDB";
export const mailService = {
    query,
    remove,
    getById,
    add,
    send
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
        { id: utilsService.makeId(), type: 'income', address: 'Nadav@gmail.com', subject: 'Hello all!', body: `Hi and welcome to our mail app, our app provides many great features, go ahead try it out!`, isStarred: true, isRead: false, sentAt: 1659833930320 },
        { id: utilsService.makeId(), type: 'outcome', address: 'Adina@gmail.com', subject: 'Check it out!', body: 'Check my Keep app, this app make you save your Keeps and share it with your friends and family', isStarred: true, isRead: false, sentAt: 1551155690578 },
        { id: utilsService.makeId(), type: 'draft', address: 'Alon@gmail.com', subject: 'lets do it!', body: 'Text Summary is an application created as an efficient tool to summarize texts automatically and quickly, which will select the most relevant information from your books or texts and will allow you to optimize your time.', isStarred: false, isRead: false, sentAt: 1551133930594 },
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


















//  Later?:

// sendMail,
// getMailById,
// updateMail,
// sendToDrafts,
// countUnreadMails,