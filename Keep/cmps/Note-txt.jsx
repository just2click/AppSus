

export class NoteTxt extends React.Component {

    state = { color: 'yellow' }
    render() {
        const { color } = this.state
        const { txt } = this.props.info
        return <article className="note-preview" style={{ backgroundColor: color }} >
            <h2>{txt}</h2>
            <p onClick={() => { this.props.remove(this.props.note.id) }} ><i className="fas fa-trash"></i></p>
        </article>
    }
}
// export class NoteTxt extends React.Component {


//     render() {

//         return <article className="note-preview" >
//             <textarea name="" id="" cols="30" rows="10"></textarea>

//             <button onClick={() => { this.props.onRemove(this.props.note.id) }}>X</button>

//         </article>
//     }
// }