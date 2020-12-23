import { mailService } from '../Mail/service/mail-service.js'
import { MailList } from '../Mail/cmps/MailList.jsx'

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
    render() {

        return <section className="main-mail">
            <h1>My Mails</h1>
            <section >
                <MailList mails={this.getMailsForDisplay()} />
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
