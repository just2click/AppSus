import { mailService } from '../Mail/service/mail-service.js'
import { MailList } from '../Mail/cmps/MailList.jsx'
import { MailCompose } from '../Mail/cmps/MailCompose.jsx'

export class Mail extends React.Component {

    state = {
        mails: [],
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

getMailsForDisplay = () =>{
    return this.state.mails
}

onRemoveMail = (mailId) => {
    mailService.remove(mailId).then(() => {
        this.loadMails()
    })
}
    render() {

        return <section className="main-mail">
            <h1>My Mails</h1>
            <button>Compose Mail</button>
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
