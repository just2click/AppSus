export function MailPreview({ mail, onRemove }) {


    return <article className="mail-preview">
    <h1>From: {mail.address}</h1>
    <h3>Subject: {mail.subject}</h3>
    <p>{mail.body}</p>
    <button onClick={() => {
                onRemove(mail.id)
            }}
            >Remove</button>
    </article>

}