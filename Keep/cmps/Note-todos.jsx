export class NoteTodos extends React.Component {


    render() {

        return <article className="note-preview" >

            <form>
                <label htmlFor="new-todo-input">
                    What needs to be done?</label>
                <input
                    type="text"
                    id="new-todo-input"
                    name="new-todo"
                    autoComplete="off"
                />
                <button type="submit">Add</button>
            </form>

            <button onClick={() => { this.props.onRemove(this.props.note.id) }}>X</button>

        </article>
    }
}