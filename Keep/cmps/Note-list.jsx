import { NotePreview } from './Note-preview.jsx'



export function NoteList({ notes, remove, changeUrl, changeColor, changeTitle, changeTxt, todoClicked, addTodo, removeTodo, addPin, changeLabel }) {
    return <section className="notes-list">
        {notes.map(note => {
            return <NotePreview key={note.id} note={note} remove={remove} changeUrl={changeUrl} changeColor={changeColor} changeTitle={changeTitle} changeTxt={changeTxt} todoClicked={todoClicked} addTodo={addTodo} removeTodo=
                {removeTodo} addPin={addPin} changeLabel={changeLabel} />
        })}
    </section>

}

