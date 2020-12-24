export class NoteImg extends React.Component {

    state = {
        color: '#dadada',
        isEdit: false,
        isColorClicked: false,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Still-Life_of_Casts._The_earliest_surviving_daguerreotype_by_Daguerre%2C_1837.jpg/225px-Still-Life_of_Casts._The_earliest_surviving_daguerreotype_by_Daguerre%2C_1837.jpg'
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

    changeColor = (currColor) => {
        let color = this.state.color
        color = currColor
        this.setState({ color })
        let isColorClicked = this.state.isColorClicked
        isColorClicked = false
        this.setState({ isColorClicked })
    }
    onInputChange = (ev) => {//on input change
        const value = ev.target.value
        console.log('value', value);
        let url = this.state.url
        // note.info[ev.target.name] = value;
        url = value
        this.setState({
            url
        });
    };

    render() {
        const { color } = this.state
        // const { url, title } = this.state.info
        const { url, title } = this.props.info
        const { isEdit } = this.state
        const { isColorClicked } = this.state
        // console.log('isEdit:', isEdit);
        console.log('the note to color:', this.props.note);
        return <article className="note-preview img-type" style={{ backgroundColor: color }}>
            <h1>{title}</h1>
            <img className="img" src={this.state.url} />

            {isEdit && <form onSubmit={() => { this.props.changeUrl(this.props.note, this.state.url) }} ><input className="change-url" type="text" placeholder="Enter img-url" name="url" onChange={this.onInputChange} value={this.state.url} /></form>}
            <p className="edit" >
                <i className="fas fa-thumbtack"></i>
                <i className="fas fa-palette" onClick={this.editColor}></i>
                <i className="fas fa-edit" onClick={this.editImgUrl}></i>
                <i className="fas fa-trash" onClick={() => { this.props.remove(this.props.note.id) }} ></i>
                {isColorClicked && <ul className="colorsEdit edit">
                    {/* <li><i class="fas fa-circle" style={{ color: 'yellow' }} onClick={() => { this.props.changeColor(this.props.note, 'yellow') }}></i></li> */}
                    <li><i class="fas fa-circle" style={{ color: 'red' }} onClick={() => { this.changeColor('red') }}></i></li>
                    <li><i class="fas fa-circle" style={{ color: 'purple' }} onClick={() => { this.changeColor('purple') }}></i></li>
                    <li><i class="fas fa-circle" style={{ color: 'blue' }} onClick={() => { this.changeColor('blue') }}></i></li>
                    <li><i class="fas fa-circle" style={{ color: 'orange' }} onClick={() => { this.changeColor('orange') }}></i></li>
                </ul>}
            </p>
        </article >
    }
}
