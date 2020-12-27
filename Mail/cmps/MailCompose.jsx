import { mailService } from "../service/mail-service.js"



export class MailCompose extends React.Component {

    state = {
        newMail: {
            address: '',
            subject: '',
            body: '',
            type: ['unread', 'sent']
        },
        isComposeShown: false,
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
                // console.log('email sent:', sentMail)
                this.props.onSent();
            })
    }
    closeEmail = () => {

    }
    render() {
        return (

            <form className="compose-form" onSubmit={this.onSendMail}>
                <div>Send An Email</div>
                <input name="address" placeholder="From" value={this.state.newMail.address} onChange={this.onInputChange} autoComplete="off" />
                <input name="subject" placeholder="Subject" value={this.state.newMail.subject} onChange={this.onInputChange} autoComplete="off" />
                <textarea name="body" type="text-area" placeholder="Content" value={this.state.newMail.body} onChange={this.onInputChange}></textarea>
                <button type="submit" onClick={() => {
                    this.onSendMail
                    this.props.tagAsSend(mail)
                }}>
                    <span>Send</span> </button>
            </form>
        )
    }

}