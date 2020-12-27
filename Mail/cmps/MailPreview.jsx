const { NavLink } = ReactRouterDOM;


export class MailPreview extends React.Component {


    state = {
        color: '',
        mail: ''
    }
    // ({ mail, onRemove }) {
    componentDidMount() {
        this.loadMail()
    }
    loadMail = () => {
        this.setState({
            mail: this.props.mail
        }, () => console.log(this.state.mail))
    }
    changeClass = () => {
        // ev.preventDefault()
        let color = this.state.color
        color = color === 'yellow' ? '' : 'yellow'
        let mail = this.state.mail
        mail.isPref = !mail.isPref
        this.setState({ color, mail })
    }


    render() {
        const { mail } = this.props
        return <article className="email-preview unread">
            <section className="mail-details" onClick={(ev) => {
                this.props.changeToRead(mail, ev)
            }}>
                <NavLink to={`/mail/${mail.id}`} >
                    <h1>From: {mail.address}</h1>
                    <h3>Subject: {mail.subject}</h3>
                    <p>{mail.body.substr(0,30)}</p>
                </NavLink>
            </section>
            <div className="mail-util">
                <p onClick={() => {
                    onRemove(mail.id)
                }}
                ><i className="fas fa-trash"></i></p>
                <p className={(mail.isPref) ? 'yellow' : ''}><i className="far fa-star" onClick={(ev) => {
                    this.props.changeToPref(mail, ev)
                    this.changeClass()
                }}></i></p>
            </div>
        </article>

    }
}