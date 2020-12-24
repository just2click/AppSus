import { mailService } from "../service/mail-service.js"



export class MailCompose extends React.Component {

    state = {
        newMail:{address: null, subject: null, body: null, isStarred: true, isRead: false, sentAt: new Date() },
    }

    // refInput = React.createRef();

    componentDidMount() {
        console.log('HHHHHHHHEYA!!');
        const {mailId} = this.state.newMail
        // this.refInput.current.focus();
        if (!mailId) return
        mailService.getById(mailId).then(mail => {
            this.setState ({mail})
        })
    }

    onSaveCompose = (ev) => {
        ev.preventDefault();
        mailService.add(this.state.newMail)
        .then(savedMail =>{
            console.log('composed')
            this.props.history.push('/mail')
        })
    }
onInputChange = (ev) => {
    const value = (ev.target.type === 'string' )
    const mail = {...this.state.newMail}
    mail[ev.target.subject] = value;
    this.setState({
        mail
    })
}
render() {
    return (
        <form className="compose-form" onSubmit={this.onSaveCompose}>
            <input placeholder="From" value={this.state.newMail.address} onChange={this.onInputChange} />
            <input placeholder="Subject" value={this.state.newMail.subject} onChange={this.onInputChange}/>
            <textarea type="text-area" placeholder="Content" value={this.state.newMail.body} onChange={this.onInputChange}></textarea>
            <button type="submit">Send</button>
        </form>
    )
}

}
// { id: utilsService.makeId(), type: 'income', address: 'Nadav@gmail.com', subject: 'Hello all!', body: `Hi and welcome to our mail app`, isStarred: true, isRead: false, sentAt: 1659833930320 },