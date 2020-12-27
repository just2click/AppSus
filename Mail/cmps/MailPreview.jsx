
const { NavLink } = ReactRouterDOM;
export function MailPreview({ mail, onRemove }) {
    return (
        <article className="email-preview unread">
            <section className="mail-details">
                <NavLink to={`/mail/${mail.id}`} >
                    <h1>From: {mail.address}</h1>
                    <h3>Subject: {mail.subject}</h3>
                    <p>{mail.body.substr(0,30)}</p>
                </NavLink>
            </section>
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