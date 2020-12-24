export class NoteVideo extends React.Component {

    state = { color: 'red' }

    render() {
        const { color } = this.state
        const { url, title } = this.props.info
        return <article className="note-preview">
            <iframe width="420" height="315"
                src={url}>
            </iframe>
            <h2>{title}</h2>
            <p onClick={() => { this.props.remove(this.props.note.id) }} ><i className="fas fa-trash"></i></p>
        </article >
    }
}

