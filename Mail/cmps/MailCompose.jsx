import { mailService } from "../service/mail-service.js"



export class MailCompose extends React.Component {

    state = {
        newMail: {
            address: '',
            subject: '',
            body: ''
        }
    }

    // refInput = React.createRef();

    // componentDidMount() {
    //     console.log('HHHHHHHHEYA!!');
    //     const {mailId} = this.state.newMail
    //     // this.refInput.current.focus();
    //     if (!mailId) return
    //     mailService.getById(mailId).then(mail => {
    //         this.setState ({mail})
    //     })
    // }

    onInputChange = (ev) => {
        // console.log(ev.target.value)
        const mail = {...this.state.newMail}
        mail[ev.target.name] = ev.target.value
        this.setState({newMail:mail})
    }
    onSendMail = (ev) => {
        ev.preventDefault();
        mailService.send(this.state.newMail)
            .then(sentMail => {
                console.log('email sent:', sentMail)
                this.props.onSent();
            })
    }
    render() {
        return (
            <form className="compose-form" onSubmit={this.onSendMail}>
                <input name="address" placeholder="From" value={this.state.newMail.address} onChange={this.onInputChange} />
                <input name="subject" placeholder="Subject" value={this.state.newMail.subject} onChange={this.onInputChange} />
                <textarea name="body" type="text-area" placeholder="Content" value={this.state.newMail.body} onChange={this.onInputChange}></textarea>
                <button type="submit" onSubmit={this.onSendMail}>Send</button>
            </form>
        )
    }

}