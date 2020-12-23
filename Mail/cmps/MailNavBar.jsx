import { Mail } from '../../pages/Mail.jsx'
export class MailNavBar extends React.Component {


    render() {
        return (
            <section>
                <ul className="clean-list">
                    <button onClick={this.onAddMail}>Compose Mail</button>
                    <li>All</li>
                    <li>Inbox</li>
                    <li>Unread</li>
                    <li>Sent</li>
                    <li>Drafts</li>
                    <li>Deleted</li>
                    <li>Spam</li>
                </ul>

            </section>


        )

    }




}