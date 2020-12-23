import { noteService } from '../services/note-service.js'

import { NoteTxt } from './Note-txt.jsx'
import { NoteImg } from './Note-img.jsx'
import { NoteTodos } from './Note-todos.jsx'
import { NoteVideo } from './Note-video.jsx'
export class NotePreview extends React.Component {

    state = {
        notesTypes: []
    }
    componentDidMount() {
        this.getTypes();
    }
    getTypes = () => {
        noteService.getNotesTypes().then(notesTypes => {
            this.setState({ notesTypes })
            // console.log(notesTypes);
        })
    }

    render() {
        const { notesTypes } = this.state
        console.log(notesTypes);
        return <article className="note-preview" onClick={() => select(note.id)}>
            <button onClick={() => { this.props.onRemove(this.props.note.id) }}>X</button>
            <h1>{this.props.note.type}</h1>
        </article >
    }
}


