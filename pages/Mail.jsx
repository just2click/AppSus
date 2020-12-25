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
        // poistion abosulute
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
        this.setState({isCompose:false})
        this.setState({isComposeShown:false})
        this.loadMails()
    }

    onOpenCompose= () => {
        this.setState({isComposeShown:true})
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

        return <div className="email-main">
            <section>
            <p onClick={this.onOpenCompose}>📧</p>
            <MailNavBar />
            </section>
            <MailList mails={this.getMailsForDisplay()} onRemove={this.onRemoveMail} />
            {this.state.isComposeShown && <MailCompose  onSent={this.onSent} onClick={this.onSent}/>}
        </div>
        // onClick={this.onCompose} -- goes back to MailCompose?
    }

}
