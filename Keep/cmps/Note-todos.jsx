export class NoteTodos extends React.Component {

    state = {

        isColorClicked: false,
        status: 'not-done',
        todos: [],
        isPinned: false
    }


    onTodoClicked = (todoId) => {
        let todo = this.state.todos.find(todo => todo.id === todoId)
        // todo.isDone = !todo.isDone
        this.setState({ todos: [...this.state.todos] })
        let status = this.state.status
        status = (status === 'not-done') ? 'done' : 'not-done'
        this.setState({ status })
    }


    editColor = (ev) => {
        ev.preventDefault();
        let isColorClicked = this.state.isColorClicked
        isColorClicked = true
        this.setState({ isColorClicked })
    }
    clearpalette = () => {
        let isColorClicked = this.state.isColorClicked
        isColorClicked = false
        this.setState({ isColorClicked })
    }

    addPin = () => {
        let isPinned = this.state.isPinned
        isPinned = isPinned ? false : true
        this.setState({ isPinned })
    }
    render() {
        const { color } = this.props.note
        const { label, todos } = this.props.info
        const { isColorClicked } = this.state
        const { isPinned } = this.state
        const { note } = this.props
        return <article className="note-preview todo-type" style={{ backgroundColor: color }} >
            {isPinned && <img className="pinImg" src="https://cdn.the7eye.org.il/uploads/2014/11/nrg-13302.png" alt="" />}
            <h2>{label}</h2>
            <ul>
                {todos.map((todo, idx) => {
                    return <li key={idx} className={`${this.state.status}`} onClick={() => { this.onTodoClicked(todo.id) }}>{todo.txt}</li>
                })}
            </ul>
            <p className="edit" >
                <i className="fas fa-thumbtack" onClick={this.addPin}></i>
                <i className="fas fa-palette" onClick={this.editColor}></i>
                <i className="fas fa-edit"></i>
                <i className="fas fa-trash" onClick={() => { this.props.remove(note.id) }} ></i>

                {isColorClicked && <ul className="colorsEdit edit">
                    <li><i className="fas fa-tint" style={{ color: 'yellowgreen' }} onClick={() => {
                        this.props.changeColor(note, 'yellowgreen')
                        this.clearpalette()
                    }}></i></li>
                    <li><i className="fas fa-tint" style={{ color: 'burlywood' }} onClick={() => {
                        this.props.changeColor(note, 'burlywood')
                        this.clearpalette()
                    }}></i></li>
                    <li><i className="fas fa-tint" style={{ color: 'coral' }} onClick={() => {
                        this.props.changeColor(note, 'coral')
                        this.clearpalette()
                    }}></i></li>
                    <li><i className="fas fa-tint" style={{ color: 'crimson' }} onClick={() => {
                        this.props.changeColor(note, 'crimson')
                        this.clearpalette()
                    }}></i></li>
                    <li><i className="fas fa-tint" style={{ color: 'gray' }} onClick={() => {
                        this.props.changeColor(note, 'gray')
                        this.clearpalette()
                    }}></i></li>
                    <li><i className="fas fa-tint" style={{ color: 'teal' }} onClick={() => {
                        this.props.changeColor(note, 'teal')
                        this.clearpalette()
                    }}></i></li>
                </ul>}
            </p>
        </article>
    }
}
