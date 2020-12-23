
import { mailService } from '../Mail/service/mail-service.js'
import { MailList } from '../Mail/cmps/MailList.jsx'
import { MailCompose } from '../Mail/cmps/MailCompose.jsx'

export class Mail extends React.Component {

    state = {
        mails: [],
        mail: {type: 'income', address: null, subject: 'Hello all!', body: `Hi and welcome to our mail app`, isStarred: true, isRead: false, sentAt: new Date()}
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
    render() {

        return <section className="main-mail">
            <h1>My Mails</h1>
            <button onClick={this.onAddMail}>Compose Mail</button>
            <section>
                <MailList mails={this.getMailsForDisplay()} onRemove={this.onRemoveMail} />
            </section>
        </section>
    }

}



// export function Mail() {
//     return (
//         <section>
//             <h1>This is the mail page!</h1>
//         </section>
//     )
// }
