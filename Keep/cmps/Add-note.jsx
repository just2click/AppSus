export class AddNote extends React.Component {
    state = {
        txt: 'Choose A Type...',
        newCmp: {
            note: '',
            type: '',
        }
    }

    addNote = (ev) => {
        ev.preventDefault();
        this.props.addNote(this.state.newCmp)
        let txt = this.state.txt
        txt = 'Choose A Type...'
        this.setState({ txt })


    }

    onInputChange = (ev) => {
        const value = ev.target.value;
        const field = ev.target.name
        const copyCmp = { ...this.state.newCmp, [field]: value }
        this.setState({ newCmp: copyCmp })

    }

    onChangeType = (noteType, placeholderTxt) => {
        const copyCmp = { ...this.state.newCmp }
        copyCmp.type = noteType
        this.setState({
            newCmp: copyCmp,
            txt: placeholderTxt,
        })
    }

    render() {
        const { note } = this.state.newCmp
        return <section>
            <form onSubmit={this.addNote} className="add-note">
                <input value={note} placeholder={this.state.txt} type="text" name="note" onChange={this.onInputChange} autoComplete="off" />
                <span className="input-signs">
                    <i className="fas fa-font search" onClick={() => this.onChangeType('NoteText', 'What\'s on your mind...')}></i>
                    <i className="fas fa-camera search" onClick={() => this.onChangeType('NoteImg', 'Enter image url...')}></i>
                    <i className="fas fa-video search" onClick={() => this.onChangeType('NoteVideo', 'Enter video url...')}></i>
                    <i className="fas fa-list-ul search" onClick={() => this.onChangeType('NoteTodos', 'Enter comma separated list...')}></i>
                </span>
            </form>
        </section>
    }

}