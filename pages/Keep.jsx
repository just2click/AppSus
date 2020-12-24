import { AddNote } from '../Keep/cmps/Add-note.jsx'
import { NoteList } from '../Keep/cmps/Note-list.jsx'
import { noteService } from '../Keep/services/note-service.js'
import { NoteFilter } from '../Keep/cmps/Note-filter.jsx'

export class Keep extends React.Component {

    state = {
        notes: [],
        filterBy: ''
    }

    componentDidMount() {
        console.log('Page is ready', noteService);
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
    addNote = (note) => {
        noteService.addNote(note)
            .then(notes => {
                this.setState({ notes })
            })
    }
    get notesForDisplay() {
        const { filterBy } = this.state
        const filterRegex = new RegExp(filterBy, 'i')
        // const { notes } = this.state
        // return notes
        return this.state.notes.filter(note => filterRegex.test(note.type))
    }
    onChangeColor = (note, color) => {
        noteService.changeColor(note, color).then(updatedNote => {
            console.log(updatedNote);
            this.loadNotes()
        })
    }
    changeUrl = (note, url) => {
        // console.log('change:', note);
        noteService.changeUrl(note, url)
            .then(updatedNote => {
                console.log(updatedNote);
                this.loadNotes()
            })
    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy })
    }
    render() {
        const notesToShow = this.notesForDisplay

        const { notes } = this.state
        if (!notes) return <div></div>
        else {
            return (
                <section className="notes-controller">
                    <h2>Your Notes</h2>
                    <AddNote addNote={this.addNote} />
                    <select onchange={this.onSetFilter}>
                        <option value="all">All</option>
                        <option value="text">Text</option>
                        <option value="img">Img</option>
                    </select>
                    <NoteList notes={notesToShow} remove={this.onRemoveNote} changeUrl={this.changeUrl} changeColor={this.onChangeColor} />
                    {/* <NoteFilter setFilter={this.onSetFilter} /> */}
                </section >
            )
        }
    }
}

// import { noteService } from '../Keep/services/note-service.js'
// import { NoteList } from '../Keep/cmps/Note-list.jsx'

// export class Keep extends React.Component {

//     state = {
//         notes: [],
//         filterBy: '',
//         selectedNote: '',
//         currType: 'textNote',
//         placeholder: 'choose something',
//         note: {
//             type: 'imgNote',
//             info: {
//                 txt: '',
//                 labal: '',
//                 todos: [],
//             },
//             style: {
//                 backgroundColor: ''
//             }
//         }
//     }

//     componentDidMount() {
//         this.loadNotes();
//     }
//     loadNotes = () => {
//         noteService.query().then(notes => {
//             this.setState({ notes })
//         })
//     }
//     onRemoveNote = (noteId) => {
//         noteService.remove(noteId).then(() => {
//             this.loadNotes()
//         })
//     }
//     onAddNote = () => {
//         noteService.add(this.state.note).then(addedNote => {
//             console.log('addedNote:', addedNote);
//             this.loadNotes();
//         })
//     }
//     onAddTxt = (ev) => {
//         ev.preventDefault();
//         this.state.note.type = 'textNote'
//         this.state.note.info.txt = "Fullstack Me Baby!"
//         let theType = 'textNote'
//         this.setState({ currType: theType })
//         this.onAddNote()
//     }
//     onAddTodo = (ev) => {
//         ev.preventDefault();
//         this.state.note.type = 'todoesNote'
//         this.state.note.info.label = 'todoesNote'
//         this.state.note.info.todos = [
//             { txt: "Do that", doneAt: null },
//             { txt: "Do this", doneAt: 187111111 }
//         ]
//         let theType = 'todoesNote'
//         this.setState({ currType: theType })
//         this.onAddNote()
//     }
//     onAddImg = (ev) => {
//         ev.preventDefault();
//         this.state.note.type = 'imgNote'
//         this.state.note.info.url = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Robert_Bunsen.jpg',
//             this.state.note.info.title = "nice pic!"
//         this.state.note.style.backgroundColor = "#00d"
//         let theType = 'imgNote'
//         this.setState({ currType: theType })
//         this.onAddNote()
//     }
//     onAddVid = (ev) => {
//         ev.preventDefault();
//         this.state.note.type = 'videoNote'
//         let theType = 'videoNote'
//         this.setState({ currType: theType })
//         this.onAddNote()
//     }
//     onSelectNote = (noteId) => {
//         const note = noteService.getNoteById(noteId)
//         this.setState({ selectedNote: note })
//     }
//     onUnSelectedNote = () => {
//         this.setState({ selectedNote: '' })
//     }
//     getNotesForDisplay = () => {
//         return this.state.notes
//     }



//     onChangeToTxt = (ev) => {
//         ev.preventDefault();
//         let type = this.state.currType
//         type = 'textNote'
//         let placeholder = this.state.placeholder
//         placeholder = 'what\'s on your mind...'
//         this.setState({ currType: type, placeholder })
//     }
//     onChangeToTodo = (ev) => {
//         ev.preventDefault();
//         let type = this.state.currType
//         type = 'todoesNote'
//         let placeholder = this.state.placeholder
//         placeholder = 'Enter list Title'
//         this.setState({ currType: type, placeholder })
//     }
//     onChangeToImg = (ev) => {
//         ev.preventDefault();
//         let type = this.state.currType
//         type = 'imgNote'
//         let placeholder = this.state.placeholder
//         placeholder = 'Enter Img url'
//         this.setState({ currType: type, placeholder })

//     }
//     onChangeToVid = (ev) => {
//         ev.preventDefault();
//         let type = this.state.currType
//         type = 'videoNote'
//         let placeholder = this.state.placeholder
//         placeholder = 'Enter YouTube url'
//         this.setState({ currType: type, placeholder })
//     }
//     render() {
//         const { selectedNote } = this.state
//         const { currType } = this.state
//         console.log('type:', currType);

//         return <section className="notes-controller">
//             <h2>Your Notes</h2>
//             {/* <section>
//                 <input type="text" name="" id="" placeholder={this.state.currType} />
//                 <button onClick={this.onAddTxt}>A</button>
//                 <button onClick={this.onAddTodo}>📋</button>
//                 <button onClick={this.onAddImg}>📷</button>
//                 <button onClick={this.onAddVid}>🎬</button>
//             </section> */}
//             <section>
//                 <input type="text" name="" id="" placeholder={this.state.placeholder} />
//                 <button onClick={this.onChangeToTxt}>A</button>
//                 <button onClick={this.onChangeToTodo}>📋</button>
//                 <button onClick={this.onChangeToImg}>📷</button>
//                 <button onClick={this.onChangeToVid}>🎬</button>
//                 {/* <button onClick={this.onAddChoosenNote}>+</button> */}
//             </section>
//             <section className="notes-list">
//             </section>
//         </section>
//     }
// }

