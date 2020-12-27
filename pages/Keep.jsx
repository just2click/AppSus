import { AddNote } from '../Keep/cmps/Add-note.jsx'
import { NoteList } from '../Keep/cmps/Note-list.jsx'
import { noteService } from '../Keep/services/note-service.js'

export class Keep extends React.Component {

    state = {
        notes: [],
        filterBy: ''
    }

    componentDidMount() {
        console.log('Page is ready');
        this.loadNotes()

    }
    loadNotes = () => {
        noteService.query()
            .then(notes => this.setState({ notes }))
    }
    onRemoveNote = (noteId) => {

        noteService.remove(noteId).then(() => {
            this.loadNotes()
        })
    }
    addNote = (note, todo) => {
        noteService.addNote(note, todo)
            .then(notes => {
                this.setState({ notes })
            })
    }

    onChangeColor = (note, color) => {
        noteService.changeColor(note, color).then(notes => {
            this.setState({ notes })
        })
    }
    onChangeUrl = (note, url, ev) => {

        ev.preventDefault()
        noteService.changeUrl(note, url).then(notes => {
            this.setState({ notes })
        })
    }
    onChangeTitle = (note, title, url, ev) => {
        ev.preventDefault()
        noteService.changeTitle(note, title, url).then(notes => {
            this.setState({ notes })
        })
    }
    onChangeTxt = (note, text, ev) => {
        ev.preventDefault()
        noteService.changeTxt(note, text).then(notes => {
            this.setState({ notes })
        })
    }
    onChangeLabel = (note, label, todos, ev) => {
        ev.preventDefault()
        noteService.changeLabel(note, label, todos).then(notes => {
            this.setState({ notes })
        })
    }
    onTodoClicked = (note, todoId) => {
        noteService.todoClicked(note, todoId).then(notes => {
            this.setState({ notes })
        })
    }
    onAddTodo = (note, todo) => {
        noteService.addTodo(note, todo).then(notes => {
            this.setState({ notes })
        })
    }
    onRemoveTodo = (note, todoId) => {
        noteService.removeTodo(note, todoId).then(notes => {
            this.setState({ notes })
        })
    }
    onAddPin = (note) => {
        noteService.addPin(note).then(notes => {
            this.setState({ notes })
        })
    }
    onSetFilter = (filterBy) => {
        console.log('filterBy', filterBy);
        this.setState({ filterBy })
    }
    get notesForDisplay() {
        const { filterBy } = this.state
        const filterRegex = new RegExp(filterBy, 'i')
        return this.state.notes.filter(note => filterRegex.test(note.type))
    }

    render() {
        const notesToShow = this.notesForDisplay
        const { filterBy } = this.state
        const { notes } = this.state
        if (!notes) return <div></div>
        else {
            return (
                <section className="notes-controller">
                    <h2 className="app-title">Your Notes</h2>
                    <section className="top-area">
                        <AddNote addNote={this.addNote} />
                        <ul className="filter">
                            <li onClick={() => { this.onSetFilter('') }}>ALL</li>
                            <li onClick={() => { this.onSetFilter('text') }}>Text</li>
                            <li onClick={() => { this.onSetFilter('img') }}>Img</li>
                        </ul>

                    </section>

                    <NoteList notes={notesToShow} remove={this.onRemoveNote} changeUrl={this.onChangeUrl} changeColor={this.onChangeColor} changeTitle={this.onChangeTitle} changeTxt={this.onChangeTxt} todoClicked={this.onTodoClicked} addTodo={this.onAddTodo} removeTodo={this.onRemoveTodo} addPin={this.onAddPin} changeLabel={this.onChangeLabel} />
                </section >
            )
        }
    }
}

