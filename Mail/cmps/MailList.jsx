import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails , onRemove}) {

    return <ul className="mail-list">
        {
            mails.map(mail => {
                return <li>
                    <MailPreview  key={mail.id} mail={mail}  onRemove={onRemove}/>
                </li>
            })
        }
    </ul>
}