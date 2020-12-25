const { NavLink, withRouter } = ReactRouterDOM;

function _AppHeader() {

    return <nav>
        <ul className="nav-pages">
            <li className="page"><NavLink exact to="/">Home</NavLink></li>
<<<<<<< HEAD
            <li className="page"><NavLink to="/mail">MissMail</NavLink></li>
            <li className="page"><NavLink to="/keep">MissKeep</NavLink></li>
            <li className="page"><NavLink to="/books">MissBook</NavLink></li>
=======
            <li className="page"><NavLink to="/about">About</NavLink></li>
            <li className="page"><NavLink to="/mail">Mail</NavLink></li>
            <li className="page"><NavLink to="/keep">Keep</NavLink></li>
>>>>>>> 4b33cd7df86433cee65f979bd664df933031e67d

        </ul>
    </nav>
}
export const AppHeader = withRouter(_AppHeader);
