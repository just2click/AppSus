const { NavLink, withRouter } = ReactRouterDOM;

function _AppHeader() {

    return <nav>
        <ul className="nav-pages">
            <li className="page"><NavLink exact to="/">Home</NavLink></li>
            <li className="page"><NavLink to="/about">About</NavLink></li>
            <li className="page"><NavLink to="/mail">Mail</NavLink></li>
            <li className="page"><NavLink to="/keep">Keep</NavLink></li>

        </ul>
    </nav>
}
export const AppHeader = withRouter(_AppHeader);
