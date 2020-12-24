export class NoteTodos extends React.Component {

    state = {
        color: 'pink',
        isColorClicked: false
    }


    // onTodoClicked=(todoId)=>{
    //     // ev.preventDefault();
    //     toggleTodo(todoId)
    // }
    // onTodoClicked(todoId){

    // }
    editColor = (ev) => {
        ev.preventDefault();
        let isColorClicked = this.state.isColorClicked
        isColorClicked = true
        this.setState({ isColorClicked })
    }
    changeColor = (currColor) => {
        let color = this.state.color
        color = currColor
        this.setState({ color })
    }
    render() {
        const { color } = this.state
        const { label, todos } = this.props.info
        const { isColorClicked } = this.state
        return <article className="note-preview todo-type" style={{ backgroundColor: color }} >
            <h2>{label}</h2>
            <ul>
                {todos.map((todo, idx) => {
                    return <li key={idx} onClick={() => { this.onTodoClicked(todo.id) }}>{todo.txt}</li>
                })}
            </ul>
            <p className="edit" >
                <i className="fas fa-thumbtack"></i>
                <i className="fas fa-palette" onClick={this.editColor}></i>

                {isColorClicked && <ul className="colorsEdit edit">
                    <li><i class="fas fa-circle" style={{ color: 'yellow' }} onClick={() => { this.changeColor('yellow') }}></i></li>
                    <li><i class="fas fa-circle" style={{ color: 'red' }} onClick={() => { this.changeColor('red') }}></i></li>
                    <li><i class="fas fa-circle" style={{ color: 'purple' }} onClick={() => { this.changeColor('purple') }}></i></li>
                    <li><i class="fas fa-circle" style={{ color: 'blue' }} onClick={() => { this.changeColor('blue') }}></i></li>
                    <li><i class="fas fa-circle" style={{ color: 'orange' }} onClick={() => { this.changeColor('orange') }}></i></li>
                </ul>}
                <i className="fas fa-edit"></i>
                <i className="fas fa-trash" onClick={() => { this.props.remove(this.props.note.id) }} ></i>
            </p>
        </article>
    }
}
