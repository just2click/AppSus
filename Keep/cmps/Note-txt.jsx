

export class NoteTxt extends React.Component {

    state = {
        color: '#dadada',
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
        let isColorClicked = this.state.isColorClicked
        isColorClicked = false
        this.setState({ isColorClicked })
    }
    render() {
        const { color } = this.state
        const { txt } = this.props.info
        const { isColorClicked } = this.state
        return <article className="note-preview txt-type" style={{ backgroundColor: color }} >
            <h2>{txt}</h2>
            <p className="edit" >
                <i className="fas fa-thumbtack"></i>
                <i className="fas fa-palette" onClick={this.editColor}></i>
                <i className="fas fa-edit"></i>
                <i className="fas fa-trash" onClick={() => { this.props.remove(this.props.note.id) }} ></i>

                {isColorClicked && <ul className="colorsEdit edit">
                    <li><i class="fas fa-circle" style={{ color: 'yellow' }} onClick={() => { this.changeColor('yellow') }}></i></li>
                    <li><i class="fas fa-circle" style={{ color: 'red' }} onClick={() => { this.changeColor('red') }}></i></li>
                    <li><i class="fas fa-circle" style={{ color: 'purple' }} onClick={() => { this.changeColor('purple') }}></i></li>
                    <li><i class="fas fa-circle" style={{ color: 'blue' }} onClick={() => { this.changeColor('blue') }}></i></li>
                    <li><i class="fas fa-circle" style={{ color: 'orange' }} onClick={() => { this.changeColor('orange') }}></i></li>
                </ul>}
            </p>
        </article>
    }
}
