
import { mailService } from "../service/mail-service.js"


export class MailDetails extends React.Component {

    state = {
        mail: null,

    }



    componentDidMount() {
        console.log('is it working???')
        this.loadMails();
    }
    

    loadMails() {
        const {mailId} = this.props.match.params
        mailService.getById(mailId).then(mail => this.setState({mail}));
    }
    onBack = () => {
        this.props.history.goBack()
    };
    render() {
        if (!this.state.mail) return <div>Loading..</div>
        return (
            <article className="email-details">
                <h2>{this.state.mail.subject}</h2>
                <p>{this.state.mail.body}</p>
                <button onClick={this.onBack}>Back</button>
            </article>
        )
    }
}

