import { noteService } from '../Keep/services/note-service.js'
import { NoteList } from '../Keep/cmps/Note-list.jsx'

export class Keep extends React.Component {

    state = {
        notes: [],
        filterBy: '',
        selectedNote: '',
        note: { type: 'text' }
    }

    componentDidMount() {
        this.loadNotes();
    }
    loadNotes = () => {
        noteService.query().then(notes => {
            this.setState({ notes })
            // console.log(notes);
        })
    }
    onRemoveNote = (noteId) => {
        noteService.remove(noteId).then(() => {
            this.loadNotes()
        })
    }
    onAddNote = (ev) => {
        ev.preventDefault();
        noteService.add(this.state.note).then(addedNote => {
            console.log('addedNote:', addedNote);
            this.loadNotes();
        })
    }
    onSelectNote = (noteId) => {
        const note = noteService.getNoteById(noteId)
        this.setState({ selectedNote: note })
    }
    onUnSelectedNote = () => {
        this.setState({ selectedNote: '' })
    }
    getNotesForDisplay = () => {
        // const {filterBy}=this.state
        return this.state.notes
    }

    render() {
        const { selectedNote } = this.state
        return <section className="notes-controller">
            <h2>Your Notes</h2>
            <section>
                <button onClick={this.onAddNote}>A</button>
                <button>📋</button>
                <button>📷</button>
                <button>🎬</button>
            </section>
            <section className="notes-list">
                {!selectedNote && <NoteList onRemove={this.onRemoveNote} notes={this.getNotesForDisplay()} />}
            </section>
        </section>
    }
}

