import { NotePreview } from './Note-preview.jsx'



export class NoteList extends React.Component {

    render() {
        console.log('CurrType:', this.props.currType);
        return (
            this.props.notes.map((note, idx) => {
                return <NotePreview key={idx} onRemove={this.props.onRemove} idx={idx} note={note} currType={this.props.currType} />
            })
        )
    }
}