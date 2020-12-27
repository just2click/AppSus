import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails, onRemove }) {

    return (
        <section className="all-mails">
            {mails.map(mail => {
                return <MailPreview key={mail.subject} mail={mail} onRemove={onRemove} />
            })}
        </section>
    )
}

