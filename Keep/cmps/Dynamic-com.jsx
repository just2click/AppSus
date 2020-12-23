import { NoteTxt } from './Note-txt.jsx'
import { NoteImg } from './Note-img.jsx'
import { NoteTodos } from './Note-todos.jsx'
import { NoteVideo } from './Note-video.jsx'

export function DynamicCmp({ note, onRemove }) {
    console.log('note:', note);
    switch (note.type) {
        case 'textNote':
            return <NoteTxt note={note} onRemove={onRemove} />
        case 'imgNote':
            return <NoteImg note={note} onRemove={onRemove} />
        case 'todoesNote':
            return <NoteTodos note={note} onRemove={onRemove} />
        case 'videoNote':
            return <NoteVideo note={note} onRemove={onRemove} />
        default:
            return <h1>Error</h1>
    }

}
