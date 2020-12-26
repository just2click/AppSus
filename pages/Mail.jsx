import { mailService } from '../Mail/service/mail-service.js'
import { MailList } from '../Mail/cmps/MailList.jsx'
// import { MailNavBar } from '../Mail/cmps/MailNavBar.jsx'
import { MailCompose } from '../Mail/cmps/MailCompose.jsx'
// import { MailFilter } from '../Mail/cmps/MailFilter.jsx'

export class Mail extends React.Component {

    state = {
        mails: [],
        // mail: { type: 'income', address: null, subject: 'Hello all!', body: `Hi and welcome to our mail app`, isStarred: true, isRead: false, sentAt: new Date() },
        isCompose: false,
        isComposeShown: false,
        // poistion abosulute
        isRead: false,
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

    get mailsForDisplay() {
        const { filterBy } = this.state
        const filterRegex = new RegExp(filterBy, 'i')
        return this.state.mails.filter(mail => filterRegex.test(mail.type))
        // return this.state.mails
    }

    onRemoveMail = (mailId) => {
        mailService.remove(mailId).then((mails) => {
            this.setState({ mails })
            // this.loadMails()
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
    onSetFiler = (filterBy) => {
        this.setState({ filterBy })
    }
    onChangeToDelete = (mail, type) => {
        // ev.preventDefault()
        mailService.changeToDeleted(mail, type)
            .then(mails => {
                this.setState({ mails })
            })
    }
    // submitCompose = (newMail) => {
    //     mailService.sendMail(newMail)
    //         .then(() => {
    //             eventBus.emit('notify', { msg: 'The mail have been sent!', type: 'success' })
    //             this.closeCompose()
    //             this.loadMails()
    //         })
    // }
    render() {
        const mailsToShow = this.mailsForDisplay
        return <div className="email-main">
            <section>
                <p onClick={this.onOpenCompose}>📧</p>
                <ul className="clean-list">
                    <li onClick={() => { this.onSetFiler('') }}>All</li>
                    <li>Inbox</li>
                    <li onClick={() => { this.onSetFiler('unread') }}>Unread</li>
                    <li onClick={() => {
                        this.onSetFiler('d')
                        console.log('this is a trah');
                    }}>Trash</li>
                    <li>Sent</li>
                    {/* <li>Drafts</li> */}
                </ul>
                {/* <MailNavBar /> */}
            </section>
            <MailList mails={mailsToShow} onRemove={this.onRemoveMail} changeToDeleted={this.onChangeToDelete} />
            {this.state.isComposeShown && <MailCompose onSent={this.onSent} onClick={this.onSent} />}
        </div>
        // onClick={this.onCompose} -- goes back to MailCompose?
    }

}
