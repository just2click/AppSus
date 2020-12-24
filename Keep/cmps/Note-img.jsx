export class NoteImg extends React.Component {

    state = { color: 'green' }
    render() {
        const { color } = this.state
        const { url, title } = this.props.info
        return <article className="note-preview" style={{ backgroundColor: color }}>
            <img className="img-type" src={url} />
            <h1>{title}</h1>
            <p onClick={() => { this.props.remove(this.props.note.id) }} ><i className="fas fa-trash"></i></p>
            <i class="fas fa-palette"></i>
        </article>
    }
}
