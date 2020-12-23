import { NotePreview } from './Note-preview.jsx'



export class NoteList extends React.Component {

    render() {
        return (
            this.props.notes.map((note, idx) => {
                return <NotePreview onRemove={this.props.onRemove} idx={idx} note={note} />
            })
        )
    }
}