export class NoteVideo extends React.Component {



    render() {

        return <article className="note-preview">
            <iframe width="420" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <button onClick={() => { this.props.onRemove(this.props.note.id) }}>X</button>

        </article >
    }
}
