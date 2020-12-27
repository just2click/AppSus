

import { NoteTxt } from './Note-txt.jsx'
import { NoteImg } from './Note-img.jsx'
import { NoteTodos } from './Note-todos.jsx'
import { NoteVideo } from './Note-video.jsx'
// import { NoteAudio } from './Note-audio.jsx'

export class NotePreview extends React.Component {

    render() {
        const { note } = this.props
        return (
            <DynamicCmp info={note.info} currType={note.type} remove={this.props.remove} note={note} changeUrl={this.props.changeUrl} changeColor={this.props.changeColor} changeTitle={this.props.changeTitle} changeTxt={this.props.changeTxt} todoClicked={this.props.todoClicked} addTodo={this.props.addTodo} removeTodo={this.props.removeTodo} addPin={this.props.addPin} changeLabel={this.props.changeLabel} />
        )
    }
}


function DynamicCmp({ info, currType, remove, note, changeUrl, changeColor, changeTitle, changeTxt, todoClicked, addTodo, removeTodo, addPin, changeLabel }) {
    switch (currType) {
        case 'NoteText':
            return <NoteTxt info={info} remove={remove} note={note} changeColor={changeColor} changeTitle={changeTitle} changeTxt={changeTxt} addPin={addPin} />
        case 'NoteImg':
            return <NoteImg info={info} remove={remove} note={note} changeUrl={changeUrl} changeColor={changeColor} changeTitle={changeTitle} addPin={addPin} />
        case 'NoteTodos':
            return <NoteTodos info={info} remove={remove} note={note} changeColor={changeColor} changeTitle={changeTitle} todoClicked={todoClicked} addTodo={addTodo} removeTodo={removeTodo} addPin={addPin} changeLabel={changeLabel} />
        case 'NoteVideo':
            return <NoteVideo info={info} remove={remove} note={note} changeUrl={changeUrl} changeColor={changeColor} changeTitle={changeTitle} addPin={addPin} />
        // case 'NoteAudio':
        //     return <NoteAudio info={info} remove={remove} note={note} changeColor={changeColor} changeTitle={changeTitle} todoClicked={todoClicked} addTodo={addTodo} removeTodo={removeTodo} addPin={addPin} />
        default:
            return <h1>Error</h1>
    }

}



