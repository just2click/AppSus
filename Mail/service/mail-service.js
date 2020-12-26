import { storageService } from '../../service/storage-service.js'
import { utilsService } from '../../service/utils-service.js'


const MAILS_KEY = "mailDB";
export const mailService = {
    query,
    remove,
    getById,
    add,
    send,
    changeToDeleted
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
        { id: utilsService.makeId(), type: 'income', address: 'Nadav@gmail.com', subject: 'Hello all!', body: `Hi and welcome to our mail app, Our app provide the latest technology!`, isStarred: true, isRead: true },
        { id: utilsService.makeId(), type: 'outcome', address: 'Adina@gmail.com', subject: 'Check it out!', body: 'Check my Keep app, The Keep app lets you save your latest funny Keeps and show them to your family', isStarred: true, isRead: false },
        { id: utilsService.makeId(), type: 'draft', address: 'Alon@gmail.com', subject: 'lets do it!', body: 'Indeed, this sort of apps is becoming more and more popular, as any person deals with great amounts of information, lacking time to read really long articles or 100-page documents. And such text analyzers seem to be the right hand, for example, for businessmen or students who certainly have to look through piles of papers.', isStarred: false, isRead: false },
    ]
    return mails
}


function _saveMailsToStorage() {
    storageService.save(MAILS_KEY, gMails)
}

function remove(mailId) {
    const mailsCopy = [...gMails]
    const mailIdx = mailsCopy.findIndex(currMail => currMail.id === mailId)
        // console.log(mailsCopy[mailIdx].style);
        // mailsCopy[mailIdx]. // finish it!!
    gMails = mailsCopy
    _saveMailsToStorage();
    return Promise.resolve(gMails);
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

function changeToDeleted(mail) {
    console.log();
    const mailToUpdate = {
        ...mail,
        type: 'deleted'
    }
    console.log('update:', mailToUpdate);
    const mailsCopy = [...gMails]
    const mailIdx = mailsCopy.findIndex(currMail => currMail.id === mail.id)
    mailsCopy[mailIdx] = mailToUpdate
    gMails = mailsCopy
    _saveMailsToStorage()
    return Promise.resolve(gMails)
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