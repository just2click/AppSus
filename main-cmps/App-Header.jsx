const { NavLink, withRouter } = ReactRouterDOM;

function _AppHeader() {

    return <nav>
        <ul className="nav-pages">
            <li className="page"><NavLink exact to="/">Home</NavLink></li>
            <li className="page"><NavLink to="/mail">MissMail</NavLink></li>
            <li className="page"><NavLink to="/keep">MissKeep</NavLink></li>
            <li className="page"><NavLink to="/books">MissBook</NavLink></li>

        </ul>
    </nav>
}
export const AppHeader = withRouter(_AppHeader);
