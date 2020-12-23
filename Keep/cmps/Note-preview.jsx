
export function NotePreview({ note, select, idx }) {
    return <article className="note-preview" onClick={() => select(note.id)}>
        <h1>{note.type}</h1>
    </article>
}
