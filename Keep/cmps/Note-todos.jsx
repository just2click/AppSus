export class NoteTodos extends React.Component {

    state = {

        isColorClicked: false,
        status: 'not-done',
        todos: [],
        todo: '',
        isPinned: false,
        isEditTodo: false
    }


    // onTodoClicked = (todoId) => {
    //     let todo = this.state.todos.find(todo => todo.id === todoId)
    //     // todo.isDone = !todo.isDone
    //     this.setState({ todos: [...this.state.todos] })
    //     let status = this.state.status
    //     status = (status === 'not-done') ? 'done' : 'not-done'
    //     this.setState({ status })
    // }

    componentDidMount() {
        this.loadTodos()
    }
    loadTodos = () => {
        this.setState({
            todos: this.props.info.todos
        }, () => console.log(this.state.todos))
    }
    editTodo = (ev) => {
        ev.preventDefault()
        let isEditTodo = this.state.isEditTodo
        isEditTodo = isEditTodo ? false : true
        this.setState({ isEditTodo })
    }
    // onAddTodo = (ev) => {
    //     let value = ev.target.value
    //     let todo = { ...this.state.todo }
    //     todo = value
    //     this.setState({ todo })

    // }
    onInputChangeTodo = (ev) => {
        let value = ev.target.value
        let todo = { ...this.state.todo }
        todo = value
        this.setState({ todo })
    }
    clearEditTodo = () => {
        let isEditTodo = this.state.isEditTodo
        isEditTodo = false
        this.setState({ isEditTodo })
    }
    changeClass = (todoId) => {

        let theTodo = this.state.todos.find(currTodo => currTodo.id === todoId)
        console.log('theTodo:', theTodo);
        theTodo.isDone = !theTodo.isDone
        this.setState({ todos: [...this.state.todos] })
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
        const { isColorClicked, isPinned, isEditTodo, todo } = this.state
        const { note } = this.props
        return <article className="note-preview todo-type" style={{ backgroundColor: color }} >
            {/* {isPinned && <img className="pinImg" src="https://cdn.the7eye.org.il/uploads/2014/11/nrg-13302.png" alt="" />} */}
            {isPinned && <img className="pinImg" src="https://cdn.the7eye.org.il/uploads/2014/11/nrg-13302.png" alt="" />}
            <h2>{label}</h2>
            <ul>
                {todos.map((todo, idx) => {
                    return <li key={idx} className={(todo.isDone) ? 'Done' : ''} onClick={() => {
                        this.props.todoClicked(note, todo.id)
                        this.changeClass(todo.id)
                    }}>{todo.txt}
                        <span className="remove-todo"><i className="fas fa-times" onClick={() => {
                            this.props.removeTodo(note, todo.id)
                        }}></i></span></li>
                })}
            </ul>
            {isEditTodo && <div><input className="add-todo" value={todo} placeholder="Add Todo" onChange={this.onInputChangeTodo} style={{ backgroundColor: color }} /><i className="fas fa-plus" onClick={() => {
                this.props.addTodo(note, todo)
                this.clearEditTodo()
            }}></i></div>}
            <p className="edit" >
                <i className="fas fa-thumbtack" onClick={this.addPin}></i>
                <i className="fas fa-palette" onMouseOver={this.editColor}></i>
                <i className="fas fa-edit" onClick={this.editTodo}></i>
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
                    <li><i className="fas fa-tint" style={{ color: 'lightgray' }} onClick={() => {
                        this.props.changeColor(note, 'lightgray')
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
