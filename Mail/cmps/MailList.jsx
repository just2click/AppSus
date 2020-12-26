import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails, onRemove, changeToDeleted }) {

    return (
        <section>
            {mails.map(mail => {
                return <MailPreview key={mail.subject} mail={mail} onRemove={onRemove} changeToDeleted={changeToDeleted} />
            })}
        </section>
    )
}

