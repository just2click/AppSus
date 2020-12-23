import { mailService } from "../service/mail-service.js";
export class MailCompose extends React.Component {

    state = {
        newMail: {
            address: '',
            subject: '',
            body: ''
        }
    }
    componentDidMount() {
        const { mailId } = this.props.match.params;
        this.refInput.current.focus();
        if (!mailId) return;
        mailService.getById(mailId).then(mail => {
            this.setState({ mail });
        });
    }
}