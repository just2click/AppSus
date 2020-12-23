import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails }) {

    return <ul className="mail-list">
        {
            mails.map(mail => {
                return <li>
                    <MailPreview mail={mail} key={mail.id} />
                </li>
            })
        }
    </ul>
}