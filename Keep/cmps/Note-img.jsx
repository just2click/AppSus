export class NoteImg extends React.Component {

    state = {
        color: 'lightgreen',
        isEdit: false,
        isColorClicked: false,
        url: ''
    }


    editImgUrl = (ev) => {
        ev.preventDefault();
        let isEdit = this.state.isEdit
        isEdit = true;
        this.setState({ isEdit })
    }
    editColor = (ev) => {
        ev.preventDefault();
        let isColorClicked = this.state.isColorClicked
        isColorClicked = true
        this.setState({ isColorClicked })
    }
    changeUrl = (ev) => {
        let url = this.state.url
        url = ev.target.value
        this.setState({ url })
    }
    changeColor = (currColor) => {
        let color = this.state.color
        color = currColor
        this.setState({ color })
    }
    render() {
        const { color } = this.state
        const { url, title } = this.props.info
        const { isEdit } = this.state
        const { isColorClicked } = this.state
        // console.log('isEdit:', isEdit);
        return <article className="note-preview img-type" style={{ backgroundColor: color }}>
            <img className="img" src={url} />
            <h1>{title}</h1>
            {isEdit && <form onSubmit={this.changeUrl} ><input className="change-url" type="text" placeholder="Enter img-url" /></form>}
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
                <i className="fas fa-edit" onClick={this.editImgUrl}></i>
                <i className="fas fa-trash" onClick={() => { this.props.remove(this.props.note.id) }} ></i>
            </p>
        </article >
    }
}
