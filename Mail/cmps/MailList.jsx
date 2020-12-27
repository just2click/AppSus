import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails, onRemove, changeToPref, changeToRead }) {

    return (
        <section className="all-mails">
            {mails.map(mail => {
                return <MailPreview key={mail.id} mail={mail} onRemove={onRemove} changeToPref={changeToPref} changeToRead={changeToRead} />
            })}
        </section>
    )
}

