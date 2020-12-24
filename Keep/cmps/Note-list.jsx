import { NotePreview } from './Note-preview.jsx'



export function NoteList({ notes, remove, changeUrl, changeColor }) {
    return <section className="notes-list">
        {notes.map(note => {
            return <NotePreview key={note.id} note={note} remove={remove} changeUrl={changeUrl} changeColor={changeColor} />
        })}
    </section>

}

