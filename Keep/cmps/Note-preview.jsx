

import { NoteTxt } from './Note-txt.jsx'
import { NoteImg } from './Note-img.jsx'
import { NoteTodos } from './Note-todos.jsx'
import { NoteVideo } from './Note-video.jsx'

export class NotePreview extends React.Component {

    render() {
        const { note } = this.props
        return (
            <DynamicCmp info={note.info} currType={note.type} remove={this.props.remove} note={note} changeUrl={this.props.changeUrl} changeColor={this.props.changeColor} changeTitle={this.props.changeTitle} changeTxt={this.props.changeTxt} />
        )
    }
}


function DynamicCmp({ info, currType, remove, note, changeUrl, changeColor, changeTitle, changeTxt }) {
    switch (currType) {
        case 'NoteText':
            return <NoteTxt info={info} remove={remove} note={note} changeColor={changeColor} changeTitle={changeTitle} changeTxt={changeTxt} />
        case 'NoteImg':
            return <NoteImg info={info} remove={remove} note={note} changeUrl={changeUrl} changeColor={changeColor} changeTitle={changeTitle} />
        case 'NoteTodos':
            return <NoteTodos info={info} remove={remove} note={note} changeColor={changeColor} changeTitle={changeTitle} />
        case 'NoteVideo':
            return <NoteVideo info={info} remove={remove} note={note} changeUrl={changeUrl} changeColor={changeColor} changeTitle={changeTitle} />
        default:
            return <h1>Error</h1>
    }

}



