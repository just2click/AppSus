export class NoteVideo extends React.Component {

    state = {
        isEditUrl: false,
        isEditTitle: false,
        isPinned: false,
        isColorClicked: false,
        url: '',
        title: this.props.note.info.title
    }
    editVidUrl = (ev) => {
        ev.preventDefault();
        let isEditUrl = this.state.isEditUrl
        isEditUrl = true;
        this.setState({ isEditUrl })
    }
    editTitle = (ev) => {
        ev.preventDefault()
        let isEditTitle = this.state.isEditTitle
        isEditTitle = isEditTitle ? false : true
        this.setState({ isEditTitle })
    }
    clearUrlInput = () => {
        let isEditUrl = this.state.isEditUrl
        isEditUrl = false
        this.setState({ isEditUrl })
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
    onInputChange = (ev) => {//on input change
        let value = ev.target.value
        let url = { ...this.state.url }
        url = value
        this.setState({
            url
        });
    };
    clearAddSign = () => {
        let isEditTitle = this.state.isEditTitle
        isEditTitle = false
        this.setState({ isEditTitle })
    }
    onInputChangeTitle = (ev) => {//on input change
        let value = ev.target.value
        let title = this.state.title
        title = value
        this.setState({
            title
        });
    };
    onAddPin = () => {

        let isPinned = this.state.isPinned
        isPinned = isPinned ? false : true
        console.log('isPinned:', isPinned);
        this.setState({ isPinned })
    }
    render() {
        const { color } = this.props.note
        const { url, title } = this.props.info
        const { isEditUrl } = this.state
        const { isColorClicked } = this.state
        const { isPinned, isEditTitle } = this.state
        const { note } = this.props
        return <article className="note-preview video-type" style={{ backgroundColor: color }}>

            {note.isPinned && <img className="pinImg" src="https://cdn.the7eye.org.il/uploads/2014/11/nrg-13302.png" alt="" />}
            <div>
                <input className="change-title" type="text" placeholder="Enter img-Title" name="url" onChange={this.onInputChangeTitle} value={this.state.title} style={{ backgroundColor: color }} />
                {isEditTitle && <i className="fas fa-pencil-alt" onClick={(ev) => {
                    this.props.changeTitle(note, this.state.title, url, ev)
                    this.clearAddSign()
                }}></i>}
            </div>
            <iframe width="220" height="200"
                src={url}>
            </iframe>
            {isEditUrl && <div><input className="change-url" type="text" placeholder="Enter video-url" name="url" onChange={this.onInputChange} value={this.state.url} style={{ backgroundColor: color }} />
                <i className="fas fa-external-link-alt" onClick={(ev) => {
                    this.props.changeUrl(note, this.state.url, ev)
                    this.clearUrlInput()
                }} ></i></div>}
            <p className="edit" >
                <i className="fas fa-thumbtack" onClick={() => {
                    this.props.addPin(note)
                    this.onAddPin()
                }}></i>
                <i className="fas fa-palette" onMouseOver={this.editColor}></i>
                <i className="fas fa-pencil-alt" onClick={this.editTitle}></i>
                <i className="fas fa-edit" onClick={this.editVidUrl}></i>
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
        </article >
    }
}


