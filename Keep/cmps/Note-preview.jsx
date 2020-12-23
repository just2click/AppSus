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

    }

    render() {
        const { notesTypes } = this.state
        console.log('currTYpe:', this.props.currType);
        // console.log(notesTypes);
        return (

            <article>
                <DynamicCmp note={this.props.note} onRemove={this.props.onRemove} currType={this.props.currType} />
            </article >
        )
    }
}


