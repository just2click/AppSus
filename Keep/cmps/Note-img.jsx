export class NoteImg extends React.Component {


    render() {

        // console.log('img-note:', this.props.note);
        return <article className="note-preview" style={{ backgroundColor: "#00d" }}>
            <h1>Nice Picture</h1>
            <img className="img-type" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Robert_Bunsen.jpg" />

            <button onClick={() => { this.props.onRemove(this.props.note.id) }}>X</button>

        </article>
    }
}