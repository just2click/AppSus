import { Mail } from '../../pages/Mail.jsx'
export class MailNavBar extends React.Component {


    render() {
        return (
            <section>
                <ul className="clean-list">
                <button className="compose-btn" onClick={() => props.openCompose()}>Compose</button>
                    <li>All</li>
                    <li>Inbox</li>
                    <li>Unread</li>
                    <li>Sent</li>
                    <li>Drafts</li>
                </ul>

            </section>


        )

    }




}