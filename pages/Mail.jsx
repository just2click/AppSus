import { mailService } from '../Mail/service/mail-service.js'
import { MailList } from '../Mail/cmps/MailList.jsx'
import { MailCompose } from '../Mail/cmps/MailCompose.jsx'


export class Mail extends React.Component {

    state = {
        mails: [],
        mail: { type: 'income', address: null, subject: 'Hello all!', body: `Hi and welcome to our mail app`, isStarred: true, isRead: false, sentAt: new Date() },
        isCompose:false,
        isComposeShown: false,
        isRead: false,
        filterBy:''
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
    onCompose = () => {
        this.setState({ isCompose: true });
    }
    onSent = () => {
        this.setState({ isCompose: false })
        this.setState({ isComposeShown: false })
        this.loadMails()
    }
    onOpenCompose = () => {
        this.setState({ isComposeShown: true })
    }
    get mailsForDisplay() {
        const { filterBy } = this.state
        const filterRegex = new RegExp(filterBy, 'i')
        return this.state.mails.filter(mail => filterRegex.test(mail.type))
    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy })
    }
    render() {
        const mailsToShow = this.mailsForDisplay
        return <div className="email-main">
                   <section>
                <p onClick={this.onOpenCompose}>📧</p>
                <ul className="clean-list">
                    <li onClick={() => { this.onSetFilter('') }}>Inbox</li>
                    <li onClick={() => { this.onSetFilter('unread') }}>Unread</li>
                    <li aria-disabled>Sent</li>
                </ul>
            </section>
            <MailList mails={mailsToShow} mails={this.getMailsForDisplay()} onRemove={this.onRemoveMail} />
            {this.state.isComposeShown && <MailCompose onSent={this.onSent} onClick={this.onSent} />}
        </div>
    }

}
