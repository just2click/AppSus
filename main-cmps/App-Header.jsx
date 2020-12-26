const { NavLink, withRouter } = ReactRouterDOM;

function _AppHeader() {

    return <nav>
        <ul className="nav-pages">
            <li className="page"><NavLink exact to="/">Home</NavLink></li>
            <li className="page"><NavLink to="/about">About</NavLink></li>
<<<<<<< HEAD
            <li className="page"><NavLink to="/mail">MissMail</NavLink></li>
            <li className="page"><NavLink to="/keep">MissKeep</NavLink></li>
            <li className="page"><NavLink to="/book">MissBook</NavLink></li>
=======
            <li className="page"><NavLink to="/mail">Mail</NavLink></li>
            <li className="page"><NavLink to="/keep">Keep</NavLink></li>
>>>>>>> 3e08e4970f9015b5c61494453dd36376330f0c8d

        </ul>
    </nav>
}
export const AppHeader = withRouter(_AppHeader);
