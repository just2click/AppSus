import { AppHeader } from './main-cmps/App-Header.jsx'
import { AppFooter } from './main-cmps/App-Footer.jsx'
import { MailDetails } from './Mail/cmps/MailDetails.jsx'
import { MailCompose } from './Mail/cmps/MailCompose.jsx'
import { Mail } from './pages/Mail.jsx'
import { Home } from './pages/Home.jsx'
import { Keep } from './pages/Keep.jsx'
// import { Books } from './pages/Books.jsx'
// import { NotePreview } from './Keep/cmps/Note-preview.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class RootCmp extends React.Component {
    render() {
        return (
            <Router>
                <section className="root-app">
                    <AppHeader />
                    <Switch>

                        <Route path="/mail/compose/:newMail?" component={MailCompose} />
                        <Route path="/mail/:mailId" component={MailDetails} />
                        <Route path="/keep" component={Keep} />
                        <Route path="/mail" component={Mail} />
                        {/* <Route path="/books" component={Books} /> */}
                        <Route path="/" component={Home} />
                    </Switch>
                    <AppFooter />
                </section>
            </Router>
        )
    }
}