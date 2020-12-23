import { NoteTxt } from './Note-txt.jsx'
import { NoteImg } from './Note-img.jsx'
import { NoteTodos } from './Note-todos.jsx'
import { NoteVideo } from './Note-video.jsx'

export function DynamicCmp({ currCmp, note }) {

    switch (currCmp) {
        case 'textNote':
            return <NoteTxt note={note} />
        case 'imgNote':
            return <NoteImg note={note} />
        case 'todosNote':
            return <NoteTodos note={note} />
        case 'videoNote':
            return <NoteVideo note={note} />
    }

}
