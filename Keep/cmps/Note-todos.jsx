export class NoteTodos extends React.Component {

    state = {

        isColorClicked: false,
        status: 'not-done',
        todos: [],
        todo: '',
        isPinned: false,
        isEditTodo: false,
        isEditLabel: false,
        label: this.props.note.info.label
    }

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
    editLabel = (ev) => {
        ev.preventDefault()
        let isEditLabel = this.state.isEditLabel
        isEditLabel = isEditLabel ? false : true
        this.setState({ isEditLabel })
    }
    onInputChangeLabel = (ev) => {//on input change
        let value = ev.target.value
        let label = this.state.label
        label = value
        this.setState({
            label
        });
    };
    clearAddSign = () => {
        let isEditLabel = this.state.isEditLabel
        isEditLabel = false
        this.setState({ isEditLabel })
    }
    onAddPin = () => {
        let isPinned = this.state.isPinned
        isPinned = isPinned ? false : true
        this.setState({ isPinned })
    }
    render() {
        const { color } = this.props.note
        const { label, todos } = this.props.info
        const { isColorClicked, isPinned, isEditTodo, isEditLabel, todo } = this.state
        const { note } = this.props
        return <article className="note-preview todo-type" style={{ backgroundColor: color }} >
            {note.isPinned && <img className="pinImg" src="https://cdn.the7eye.org.il/uploads/2014/11/nrg-13302.png" alt="" />}
            <div>
                <input className="change-title" type="text" name="url" onChange={this.onInputChangeLabel} value={this.state.label} style={{ backgroundColor: color }} />
                {isEditLabel && <i className="fas fa-pencil-alt" onClick={(ev) => {
                    this.props.changeLabel(note, this.state.label, todos, ev)
                    this.clearAddSign()
                }}></i>}
            </div>
            <ul>
                {todos.map((todo, idx) => {
                    return <li key={idx} className={(todo.isDone) ? 'Done' : ''} onClick={() => {
                        this.props.todoClicked(note, todo.id)
                        this.changeClass(todo.id)
                    }}>{todo.txt}{'   '}
                        {todo.isDone && <span className={(todo.isDone) ? 'DoneAt' : ''} >{todo.doneAt}</span>}
                        <span className="remove-todo"><i className="remove-it fas fa-times" onClick={() => {
                            this.props.removeTodo(note, todo.id)
                        }}></i></span></li>
                })}
            </ul>
            {isEditTodo && <div><input className="add-todo" value={todo} placeholder="Add Todo" onChange={this.onInputChangeTodo} style={{ backgroundColor: color }} /><i className="fas fa-plus" onClick={() => {
                this.props.addTodo(note, todo)
                this.clearEditTodo()
            }}></i></div>}
            <p className="edit" >
                <i className="fas fa-thumbtack" onClick={() => {
                    this.props.addPin(note)
                    this.onAddPin()
                }}></i>
                <i className="fas fa-palette" onMouseOver={this.editColor}></i>
                <i className="fas fa-pencil-alt" onClick={this.editLabel}></i>
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
