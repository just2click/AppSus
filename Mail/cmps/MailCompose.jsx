import { mailService } from "../service/mail-service.js";
export class MailCompose extends React.Component {

    state = {
        newMail: {
            address: '',
            subject: '',
            body: ''
        }
    }
    refInput = React.createRef();
    componentDidMount() {
        const { mailId } = this.props.match.params;
        this.refInput.current.focus();
        if (!mailId) return;
        mailService.getById(mailId).then(mail => {
            this.setState({ mail });
        });
    }
    onSaveMail = (ev) => {
        ev.preventDefault();

        if (this.state.mail.power === '') {
            alert('must enter info');
            return;
        }

        petService.save(this.state.pet)
            .then(savedPet => {
                console.log('Saves succesfully', savedPet);
                this.props.history.push('/pet');
            })

    };

}