
const {NavLink} = ReactRouterDOM;
export function MailPreview({ mail, onRemove }) {
    const isReadClass = (mail.isRead) ? 'read' : ''
    return (
    <article className={`email-preview ${isReadClass}`}>
    <NavLink  to={`/mail/${mail.id}`} >
    <h1>From: {mail.address}</h1>
    <h3>Subject: {mail.subject.substr(0,25)}</h3>
    <p>{mail.body.substr(0,25)}</p>
        </NavLink>
    <div className="mail-util">
    <p onClick={() => {
        onRemove(mail.id)
    }}
    ><i className="fas fa-trash"></i></p>
            <p><i className="far fa-star"></i></p>
    </div>
    </article>
    )
}