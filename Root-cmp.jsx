import { AppHeader } from './main-cmps/App-Header.jsx'
import { AppFooter } from './main-cmps/App-Footer.jsx'
import { MailDetails } from './Mail/cmps/MailDetails.jsx'
import { Keep } from './pages/Keep.jsx'
import { Mail } from './pages/Mail.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class RootCmp extends React.Component {
    render() {
        return (
            <Router>
                <section className="root-app">
                    <AppHeader />
                    <Switch>
                        <Route path="/mail/:mailId" component={MailDetails} />
                        <Route path="/keep" component={Keep} />
                        <Route path="/mail" component={Mail} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={Home} />
                    </Switch>
                    <AppFooter />
                </section>
            </Router>
        )
    }
}