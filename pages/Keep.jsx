import { noteService } from '../Keep/services/note-service.js'
import { NoteList } from '../Keep/cmps/Note-list.jsx'

export class Keep extends React.Component {

    state = {
        notes: [],
        filterBy: '',
        selectedNote: '',
        note: {
            type: 'imgNote',
            info: {
                txt: '',
                labal: '',
                todos: [],
            },
            style: {
                backgroundColor: ''
            }
        }
    }

    componentDidMount() {
        this.loadNotes();
    }
    loadNotes = () => {
        noteService.query().then(notes => {
            this.setState({ notes })
        })
    }
    onRemoveNote = (noteId) => {
        noteService.remove(noteId).then(() => {
            this.loadNotes()
        })
    }
    onAddNote = () => {
        noteService.add(this.state.note).then(addedNote => {
            console.log('addedNote:', addedNote);
            this.loadNotes();
        })
    }
    onAddTxt = (ev) => {
        ev.preventDefault();
        this.state.note.type = 'textNote'
        this.state.note.info.txt = "Fullstack Me Baby!"
        this.onAddNote()
    }
    onAddTodo = (ev) => {
        ev.preventDefault();
        this.state.note.type = 'todoesNote'
        this.state.note.info.label = 'todoesNote'
        this.state.note.info.todos = [
            { txt: "Do that", doneAt: null },
            { txt: "Do this", doneAt: 187111111 }
        ]
        this.onAddNote()
    }
    onAddImg = (ev) => {
        ev.preventDefault();
        this.state.note.type = 'imgNote'
        this.state.note.info.url = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Robert_Bunsen.jpg',
            this.state.note.info.title = "nice pic!"
        this.state.note.style.backgroundColor = "#00d"
        this.onAddNote()
    }
    onAddVid = (ev) => {
        ev.preventDefault();
        this.state.note.type = 'videoNote'
        this.onAddNote()
    }
    onSelectNote = (noteId) => {
        const note = noteService.getNoteById(noteId)
        this.setState({ selectedNote: note })
    }
    onUnSelectedNote = () => {
        this.setState({ selectedNote: '' })
    }
    getNotesForDisplay = () => {
        return this.state.notes
    }

    render() {
        const { selectedNote } = this.state
        return <section className="notes-controller">
            <h2>Your Notes</h2>
            <section>
                <button onClick={this.onAddTxt}>A</button>
                <button onClick={this.onAddTodo}>📋</button>
                <button onClick={this.onAddImg}>📷</button>
                <button onClick={this.onAddVid}>🎬</button>
            </section>
            <section className="notes-list">
                {!selectedNote && <NoteList onRemove={this.onRemoveNote} notes={this.getNotesForDisplay()} />}
            </section>
        </section>
    }
}

