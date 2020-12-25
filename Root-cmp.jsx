import { AppHeader } from './main-cmps/App-Header.jsx'
import { AppFooter } from './main-cmps/App-Footer.jsx'
import { MailDetails } from './Mail/cmps/MailDetails.jsx'
import { MailCompose } from './Mail/cmps/MailCompose.jsx'
import { Keep } from './pages/Keep.jsx'
import { Mail } from './pages/Mail.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
<<<<<<< HEAD
import { Keep } from './pages/Keep.jsx'
// import { Books } from './pages/Books.jsx'
// import { NotePreview } from './Keep/cmps/Note-preview.jsx'

=======
>>>>>>> 4b33cd7df86433cee65f979bd664df933031e67d
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class RootCmp extends React.Component {
    render() {
        return (
            <Router>
                <section className="root-app">
                    <AppHeader />
                    <Switch>
<<<<<<< HEAD

                        <Route path="/mail/compose/:newMail?" component={MailCompose} />
                        <Route path="/mail/:mailId" component={MailDetails} />
                        <Route path="/keep" component={Keep} />
                        <Route path="/mail" component={Mail} />
                        {/* <Route path="/books" component={Books} /> */}
=======
                        {/* <Route path="/keep/:keepId" component={NotePreview} /> */}
                        {/* <Route path="/mail/compose/:newMail?" component={MailCompose} /> */}
                        <Route path="/mail/:mailId" component={MailDetails} />
                        <Route path="/keep" component={Keep} />
                        <Route path="/mail" component={Mail} />
                        <Route path="/about" component={About} />
>>>>>>> 4b33cd7df86433cee65f979bd664df933031e67d
                        <Route path="/" component={Home} />
                    </Switch>
                    <AppFooter />
                </section>
            </Router>
        )
    }
}