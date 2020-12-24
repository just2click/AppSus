export class AddNote extends React.Component {
    state = {
        txt: 'What\'s on your mind...',
        newCmp: {
            note: '',
            type: '',
        }
    }

    addNote = (ev) => {
        ev.preventDefault();
        this.props.addNote(this.state.newCmp)
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
            <form onSubmit={this.addNote}>
                <input value={note} placeholder={this.state.txt} type="text" name="note" onChange={this.onInputChange} />

                <button type="button" onClick={() => this.onChangeType('NoteText', 'What\'s on your mind...')}>A</button>
                <button type="button" onClick={() => this.onChangeType('NoteImg', 'Enter image url')}>📷</button>
                <button type="button" onClick={() => this.onChangeType('NoteVideo', 'Enter video url')}>🎬</button>
                <button type="button" onClick={() => this.onChangeType('NoteTodos', 'Enter comma separated list')}>📋</button>
                {/* <button type="submit">ADD</button> */}
            </form>
        </section>
    }

}