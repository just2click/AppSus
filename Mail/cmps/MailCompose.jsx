
export class MailCompose extends React.Component {

    state = {
        newMail: {
            address: '',
            subject: '',
            body: ''
        }
    }


    elInput = React.createRef()

    componentDidMount() {
        const keepValue = this.props.keepToMail
        if (keepValue) {
            this.setState({ newMail: { ...this.state.newMail, body: keepValue } })
        }
        this.elInput.current.focus()
    }

    onInputChange = (ev) => {
        this.setState({ newMail: { ...this.state.newMail, [ev.target.name]: ev.target.value } })
    }

    onSubmitCompose = (ev) => {
        ev.preventDefault()
        this.props.onSubmitCompose(this.state.newMail)
    }

    render() {

        return (
            <div>
                <div>
                    <p> New Message </p>
                    <div>
                        <button title="save to drafts" onClick={() => this.props.onSendToDrafts(this.state.newMail)}></button>
                    </div>
                </div>
                <form onSubmit={this.onSubmitCompose} >
                    <div>
                        <input type="mail" name="address" placeholder="to" onChange={this.onInputChange} />
                    </div>
                    <div>
                        <input ref={this.elInput} type="text" name="subject" placeholder="Subject" onChange={this.onInputChange} />
                    </div>

                    <div>
                        <textarea value={this.state.newMail.body} rows="25" type="text" name="body" placeholder="Write your mail here" onChange={this.onInputChange} />
                    </div>
                    <section>
                        <button type="submit" title="Send"> Send </button>
                        <button onClick={() => this.props.onCloseCompose()}></button>
                    </section>
                </form>
            </div>

        )
    }
}

