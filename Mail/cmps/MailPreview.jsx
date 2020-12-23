export function MailPreview({ mail, onRemove }) {


    return <article className="mail-preview">
    <h1>From: {mail.address}</h1>
    <h3>Subject: {mail.subject}</h3>
    <p>{mail.body}</p>
    <div className="mail-util">
    <p onClick={() => {
                onRemove(mail.id)
            }}
            ><i class="fas fa-trash"></i></p>
            <p><i class="far fa-star"></i></p>
            </div>
    </article>

}