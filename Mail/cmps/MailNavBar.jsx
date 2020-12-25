import { Mail } from '../../pages/Mail.jsx'
const { Link } = ReactRouterDOM;
export class MailNavBar extends React.Component {


    render() {
        return (
            <section>
                <ul className="clean-list">
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