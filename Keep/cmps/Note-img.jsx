// import { noteService, noteServise } from '../services/note-service.js'

export class NoteImg extends React.Component {

    state = {
        isEditUrl: false,
        isEditTitle: false,
        isPinned: false,
        isColorClicked: false,
        url: '',
        title: ''
    }

    edit = (ev) => {
        ev.preventDefault();
        let isEditUrl = this.state.isEditUrl
        isEditUrl = isEditUrl ? false : true;
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
    onInputChangeUrl = (ev) => {//on input change
        let value = ev.target.value
        let url = { ...this.state.url }
        url = value
        this.setState({
            url
        });
    };
    onInputChangeTitle = (ev) => {//on input change
        let value = ev.target.value
        let title = this.state.title
        title = value
        this.setState({
            title
        });
    };
    clearTitleInput = () => {
        let isEditTitle = this.state.isEditTitle
        isEditTitle = false
        this.setState({ isEditTitle })
    }
    addPin = () => {
        let isPinned = this.state.isPinned
        isPinned = isPinned ? false : true
        this.setState({ isPinned })
    }
    render() {

        const { color } = this.props.note
        const { url, title } = this.props.info
        const { isEditUrl, isEditTitle, isColorClicked, isPinned } = this.state
        const { note } = this.props

        console.log('the note', this.props.note);
        return <article className="note-preview img-type" style={{ backgroundColor: color }}>
            {isPinned && <img className="pinImg" src="https://cdn.the7eye.org.il/uploads/2014/11/nrg-13302.png" alt="" />}
            <h1>{title}</h1>

            <img className="img" src={url} />

            {isEditUrl && <div><input className="change-url" type="text" placeholder="Enter img-url" name="url" onChange={this.onInputChangeUrl} value={this.state.url} style={{ backgroundColor: color }} />
                <i className="fas fa-external-link-alt" onClick={(ev) => {
                    this.props.changeUrl(note, this.state.url, ev)
                    this.clearUrlInput()
                }} ></i>
            </div>}
            {isEditTitle && <div><input className="change-title" type="text" placeholder="Enter img-Title" name="url" onChange={this.onInputChangeTitle} value={this.state.title} style={{ backgroundColor: color }} />
                <i class="fas fa-pencil-alt" onClick={(ev) => {
                    this.props.changeTitle(note, this.state.title, ev)
                    this.clearTitleInput()
                }}></i>
            </div>}
            <p className="edit" >
                <i className="fas fa-thumbtack" onClick={this.addPin} ></i>
                <i className="fas fa-palette" onMouseOver={this.editColor}></i>
                <i className="fas fa-pencil-alt" onClick={this.editTitle}></i>
                <i className="fas fa-edit" onClick={this.edit}></i>
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
