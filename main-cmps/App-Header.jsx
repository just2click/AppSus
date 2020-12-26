const { NavLink, withRouter } = ReactRouterDOM;

function _AppHeader() {

    return <nav>
        <ul className="nav-pages">
            <li className="page"><NavLink exact to="/">Home</NavLink></li>
            <li className="page"><NavLink to="/about">About</NavLink></li>
<<<<<<< HEAD
            <li className="page"><NavLink to="/mail">Mail</NavLink></li>
            <li className="page"><NavLink to="/keep">Keep</NavLink></li>
=======
            <li className="page"><NavLink to="/mail">MissMail</NavLink></li>
            <li className="page"><NavLink to="/keep">MissKeep</NavLink></li>
            <li className="page"><NavLink to="/book">MissBook</NavLink></li>
>>>>>>> 610f684506a66ef12b16af407d581d7d69a2af72

        </ul>
    </nav>
}
export const AppHeader = withRouter(_AppHeader);
