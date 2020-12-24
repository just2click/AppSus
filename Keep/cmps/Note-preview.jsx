// import { noteService } from '../services/note-service.js'
// import { DynamicCmp } from '../cmps/Dynamic-com.jsx'

import { NoteTxt } from './Note-txt.jsx'
import { NoteImg } from './Note-img.jsx'
import { NoteTodos } from './Note-todos.jsx'
import { NoteVideo } from './Note-video.jsx'

export class NotePreview extends React.Component {

    render() {
        const { note } = this.props
        return (
            <DynamicCmp info={note.info} currType={note.type} remove={this.props.remove} note={note} changeUrl={this.props.changeUrl} changeColor={this.props.changeColor} />
        )
    }
}


function DynamicCmp({ info, currType, remove, note, changeUrl, changeColor }) {
    switch (currType) {
        case 'NoteText':
            return <NoteTxt info={info} remove={remove} note={note} changeColor={changeColor} />
        case 'NoteImg':
            return <NoteImg info={info} remove={remove} note={note} changeUrl={changeUrl} changeColor={changeColor} />
        case 'NoteTodos':
            return <NoteTodos info={info} remove={remove} note={note} changeColor={changeColor} />
        case 'NoteVideo':
            return <NoteVideo info={info} remove={remove} note={note} changeUrl={changeUrl} changeColor={changeColor} />
        default:
            return <h1>Error</h1>
    }

}



