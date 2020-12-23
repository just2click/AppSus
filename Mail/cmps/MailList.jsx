import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails, onRemove }) {

    return (
        <section>
            {mails.map(mail => {
                return <MailPreview key={mail.id} mail={mail} onRemove={onRemove} />
            })}
        </section>
    )
}

