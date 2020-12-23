import { NotePreview } from './Note-preview.jsx'

export function NoteList({ notes }) {
    console.log(notes);
    return (
        notes.map((note, idx) => {
            return <NotePreview idx={idx} note={note} />
        })
    )
}