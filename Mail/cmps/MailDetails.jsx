import { mailService } from "../service/mail-service.js"

const { withRouter } = ReactRouterDOM;

class _EmailDetails extends React.Component {

    state = {
        mail: null,

    }


    componentDidMount() {
        this.loadEmail();
    }

    loadEmail() {
        const {mailId} = this.props.match.params;
        mailService.getById(mailId).then(mail => this.setState({mail}));
    }
    render() {
        const { mail } = this.state;
        if (!mail) return <div>Empty Inbox...</div>
        return (
            <article className="email-details">
                <h2>{mail.subject}</h2>
                <p>{mail.body}</p>
                <button onClick={this.props.onBack}>Back</button>
            </article>
        )
    }
}

export const EmailDetails = withRouter(_EmailDetails);