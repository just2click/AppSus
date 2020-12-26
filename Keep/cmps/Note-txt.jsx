

export class NoteTxt extends React.Component {

    state = {
        isColorClicked: false,
        isPinned: false,
        isEditTxt: false,
        text: this.props.info.txt
    }

    editColor = (ev) => {
        ev.preventDefault();
        let isColorClicked = this.state.isColorClicked
        isColorClicked = isColorClicked ? false : true
        this.setState({ isColorClicked })
    }
    clearpalette = () => {
        let isColorClicked = this.state.isColorClicked
        isColorClicked = false
        this.setState({ isColorClicked })
    }
    editTxt = (ev) => {
        ev.preventDefault()
        let isEditTxt = this.state.isEditTxt
        isEditTxt = isEditTxt ? false : true
        this.setState({ isEditTxt })
    }
    clearEditTxt = () => {
        let isEditTxt = this.state.isEditTxt
        isEditTxt = false
        this.setState({ isEditTxt })
    }
    onTextChange = (ev) => {
        let value = ev.target.value
        let text = { ...this.state.text }
        text = value
        this.setState({ text })
    }
    addPin = () => {
        let isPinned = this.state.isPinned
        isPinned = isPinned ? false : true
        this.setState({ isPinned })
    }
    render() {
        const { color } = this.props.note
        const { txt } = this.props.info
        const { isColorClicked, isPinned, isEditTxt } = this.state
        const { note } = this.props
        return <article className="note-preview txt-type" style={{ backgroundColor: color }} >
            {isPinned && <img className="pinImg" src="https://cdn.the7eye.org.il/uploads/2014/11/nrg-13302.png" alt="" />}
            <h2>{txt}</h2>
            {isEditTxt && <div><textarea cols="15" rows="" onChange={this.onTextChange} value={this.state.text}>{txt}</textarea><i class="fas fa-plus" onClick={(ev) => {
                this.props.changeTxt(note, this.state.text, ev)
                this.clearEditTxt()
            }}></i></div>}

            <p className="edit" >
                <i className="fas fa-thumbtack" onClick={this.addPin}></i>
                <i className="fas fa-palette" onMouseOver={this.editColor}></i>
                <i className="fas fa-edit" onClick={this.editTxt}></i>
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
