export class NoteTodos extends React.Component {

    state = { color: 'pink' }

    render() {
        const { color } = this.state
        const { label, todos } = this.props.info
        return <article className="note-preview" style={{ backgroundColor: color }} >
            <h2>{label}</h2>
            <ul>
                {todos.map((todo, idx) => {
                    return <li key={idx}>{todo.txt}</li>
                })}
            </ul>
            <p onClick={() => { this.props.remove(this.props.note.id) }} ><i className="fas fa-trash"></i></p>
        </article>
    }
}
