import { noteService } from '../Keep/services/note-service.js'
import { NoteList } from '../Keep/cmps/Note-list.jsx'

export class Keep extends React.Component {

    state = {
        notes: [],
        filterBy: '',
        selectedNote: ''
    }

    componentDidMount() {
        this.loadNotes();
    }
    loadNotes = () => {
        noteService.query().then(notes => {
            this.setState({ notes })
            console.log(notes);
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
            <section className="notes-list">
                {!selectedNote && <NoteList notes={this.getNotesForDisplay()} />}
            </section>
        </section>
    }
}

// export function Keep() {
//     return (
//         <section>
//             <h1>This is the keep page</h1>
//         </section>
//     )
// }