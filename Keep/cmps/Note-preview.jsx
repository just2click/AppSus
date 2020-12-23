import { noteService } from '../services/note-service.js'
import { DynamicCmp } from '../cmps/Dynamic-com.jsx'

export class NotePreview extends React.Component {

    state = {
        notesTypes: {
            title: '',
            cmps: [{
                type: 'textNote'
            },
            {
                type: 'imgNote'
            },
            {
                type: 'todoesNote'
            },
            {
                type: 'videoNote'
            }
            ]
        }
    }
    componentDidMount() {
        // this.getTypes();
        // console.log(this.state.notesTypes);
    }
    // getTypes = () => {
    //     noteService.getNotesTypes().then(notesTypes => {
    //         console.log(notesTypes);
    //         this.setState({ notesTypes })
    //     })
    // }

    render() {
        const { notesTypes } = this.state
        console.log(notesTypes);
        return (

            <article className="note-preview" >
                <h1>{this.props.note.type}</h1>
                {/* {notesTypes.cmps.map((cmp, idx) => {
                    return (
                        <div key={idx}>
                            <DynamicCmp currCmp={cmp.type} note={this.props.note} />
                        </div>
                    )
                })} */}

                <button onClick={() => { this.props.onRemove(this.props.note.id) }}>X</button>
                <h1>{this.props.note.type}</h1>
            </article >
        )
    }
}


