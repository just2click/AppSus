

export class NoteTxt extends React.Component {


    render() {

        return <article className="note-preview" >
            <textarea name="" id="" cols="30" rows="10"></textarea>

            <button onClick={() => { this.props.onRemove(this.props.note.id) }}>X</button>

        </article>
    }
}