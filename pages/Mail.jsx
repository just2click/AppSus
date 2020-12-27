import { mailService } from '../Mail/service/mail-service.js'
import { MailList } from '../Mail/cmps/MailList.jsx'
import { MailCompose } from '../Mail/cmps/MailCompose.jsx'


export class Mail extends React.Component {

    state = {
        mails: [],
        mail: { type: 'income', address: null, subject: 'Hello all!', body: `Hi and welcome to our mail app`, isStarred: true, isRead: false, sentAt: new Date() },
        isCompose: false,
        isComposeShown: false,
        isUnread: true,
        filterBy: ''
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



    onRemoveMail = (mailId) => {
        mailService.remove(mailId).then(() => {
            this.loadMails()
        })
    }

    onAddMail = (ev) => {
        ev.preventDefault();
        mailService.add(this.state.mail).then(addedMail => {
            this.loadMails();
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

    onReadMail = () => {
        const className = mail.isUnread ? 'email-preview unread' : 'email-preview'
        this.setState({ isUnread: true })
    }
    onChangeToPref = (mail, ev) => {
        ev.preventDefault()
        mailService.changeToPref(mail).then(mails => {
            this.setState({ mails })
        })
    }
    onChangeToRead = (mail, ev) => {
        ev.preventDefault()
        mailService.changeToRead(mail).then(mails => {
            this.setState({ mails })
        })
    }
    onTagAsSend = (mail, ev) => {
        ev.preventDefault()
        mailService.tagAsSend(mail).then(mails => [
            this.setState({ mails })
        ])
    }
    render() {
        const { mail } = this.state;
        const mailsToShow = this.mailsForDisplay
        return <div className="email-main">
            <section className="filter-area">
                <p onClick={this.onOpenCompose}>📧</p>
                <ul className="clean-list">
                    <li onClick={() => { this.onSetFilter('') }}>Inbox</li>
                    <li onClick={() => { this.onSetFilter('read') }}>Read</li>
                    <li onClick={() => { this.onSetFilter('sent') }}>Sent</li>
                    <li onClick={() => { this.onSetFilter('pref') }}>Starred</li>
                </ul>
            </section>
            <MailList mails={mailsToShow} onRemove={this.onRemoveMail} onClick={this.onReadMail} changeToPref={this.onChangeToPref} changeToRead={this.onChangeToRead} />
            {this.state.isComposeShown && <MailCompose onSent={this.onSent} onClick={this.onSent} tagAsSend={this.onTagAsSend} />}
        </div>
    }

}
