import { mailService } from '../Mail/service/mail-service.js'
import { MailList } from '../Mail/cmps/MailList.jsx'
import { MailNavBar } from '../Mail/cmps/MailNavBar.jsx'
import { MailCompose } from '../Mail/cmps/MailCompose.jsx'
import { MailFilter } from '../Mail/cmps/MailFilter.jsx'


export class Mail extends React.Component {

    state = {
        mails: [],
        mail: { type: 'income', address: null, subject: 'Hello all!', body: `Hi and welcome to our mail app`, isStarred: true, isRead: false, sentAt: new Date() },
        isCompose:false,
        isComposeShown: false,
        isRead: false,
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query()
            .then(mails => {
                this.setState({ mails })
            })
    }

    getMailsForDisplay = () => {
        return this.state.mails
    }

    onRemoveMail = (mailId) => {
        mailService.remove(mailId).then(() => {
            this.loadMails()
        })
    }

    onAddMail = (ev) => {
        ev.preventDefault();
        mailService.add(this.state.mail).then(addedMail => {
            console.log('addedNote:', addedMail);
            this.loadMails();
        })
    }

    
    openCompose = () => {
        this.setState({ isComposeShown: true })
    }

    closeCompose = () => {
        this.setState({ isComposeShown: false })
    }

    sendToDrafts = (draft) => {
        if (!draft.address && !draft.subject && !draft.body) {
            this.closeCompose();
            return
        }
        mailService.sendToDrafts(draft)
            .then(() => {
                eventBus.emit('notify', { msg: 'Saved to drafts!', type: 'success' })
                this.closeCompose()
                this.loadMails()
            })
    }

    onSent = () => {
        this.setState({isCompose:false})
        this.loadMails()
    }

    submitCompose = (newMail) => {
        mailService.sendMail(newMail)
            .then(() => {
                eventBus.emit('notify', { msg: 'The mail have been sent!', type: 'success' })
                this.closeCompose()
                this.loadMails()
            })
    }
    render() {

        return <div className="email-main">
            {/* <button onClick={this.onAddMail}>Compose Mail</button> */}
            <MailNavBar />
            <MailList mails={this.getMailsForDisplay()} onRemove={this.onRemoveMail} />
        </div>
    }

}
