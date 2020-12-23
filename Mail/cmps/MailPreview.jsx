export function MailPreview({ mail }) {


    return <article className="mail-preview">
    <h1>{mail.subject}</h1>
    <p>{mail.body}</p>
    </article>

}