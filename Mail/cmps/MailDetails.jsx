
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
        const { mailId } = this.props.match.params
        mailService.getById(mailId).then(mail => this.setState({ mail }));
    }
    onBack = () => {
        this.props.history.goBack()
    };
    render() {
        if (!this.state.mail) return <div>Loading..</div>
        return (
            <section className="details-view">
                <article className="email-details">
                    <div><h2>Subject: {this.state.mail.subject}</h2></div>
                    <section className="content">
                        <h3>Content:</h3>
                        <p>{this.state.mail.body}</p>
                        <i class="fas fa-backward" onClick={this.onBack} ></i>
                    </section>
                </article>
            </section>
        )
    }
}

