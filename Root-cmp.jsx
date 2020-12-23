import { AppHeader } from './main-cmps/App-Header.jsx'
import { AppFooter } from './main-cmps/App-Footer.jsx'
import { Mail } from './pages/Mail.jsx'
import { Home } from './pages/Home.jsx'
import { Keep } from './pages/Keep.jsx'
// import { AppFooter } from './main-cmps/App-Footer.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class RootCmp extends React.Component {
    render() {
        return (
            <Router>
                <section className="root-app">
                    <AppHeader />
                    <Switch>
                        <Route path="/keep" component={Keep} />
                        <Route path="/mail" component={Mail} />
                        <Route path="/" component={Home} />
                    </Switch>
                    <AppFooter />
                </section>
            </Router>
        )
    }
}