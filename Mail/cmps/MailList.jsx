import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails , onRemove}) {

    return <ul className="mail-list">
        {
            mails.map(mail => {
                return <li>
                    <MailPreview mail={mail} key={mail.id} onRemove={onRemove}/>
                </li>
            })
        }
    </ul>
}