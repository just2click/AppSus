import { mailService } from "../service/mail-service.js"



export class MailCompose extends React.Component {

    state = {
        newMail: {
            address: '',
            subject: '',
            body: '',
            type: ['unread', 'sent']
        },
    }


    onInputChange = (ev) => {
        const mail = { ...this.state.newMail }
        mail[ev.target.name] = ev.target.value
        this.setState({ newMail: mail })
    }
    onSendMail = (ev) => {
        ev.preventDefault();
        mailService.send(this.state.newMail)
            .then(sentMail => {
                this.props.onSent();
            })
    }

    render() {
        return (
            <form className="compose-form" onSubmit={this.onSendMail}>
                <div>Send An Email</div>
                <input name="address" placeholder="Cc:" value={this.state.newMail.address} onChange={this.onInputChange} autoComplete="off" />
                <input name="subject" placeholder="Subject" value={this.state.newMail.subject} onChange={this.onInputChange} autoComplete="off" />
                <textarea name="body" type="text-area" placeholder="Content" value={this.state.newMail.body} onChange={this.onInputChange}></textarea>
                <button type="submit" onSubmit={this.onSendMail}>Send</button>
            </form>
        )
    }

}