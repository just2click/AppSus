export class NoteVideo extends React.Component {

    state = {
        color: 'red',
        isColorClicked: false
    }
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
        const { url, title } = this.props.info
        const { isColorClicked } = this.state
        return <article className="note-preview video-type" style={{ backgroundColor: color }}>
            <iframe width="320" height="200"
                src={url}>
            </iframe>
            <h2>{title}</h2>
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
        </article >
    }
}

