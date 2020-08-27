import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom'

import {AuthContext} from '../../context/auth-context'
import './NavLinks.css'

const NavLinks = props => {
   const auth = useContext(AuthContext)

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
           {auth.isLoggedIn  && (<li>
                <NavLink to="/u1/workouts">My Workouts</NavLink>
            </li>)}
            {auth.isLoggedIn && (<li>
                <NavLink to="/workouts/new">Add Workouts</NavLink>
            </li>)}
            {!auth.isLoggedIn && (<li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>
            )}
            {auth.isLoggedIn && <li>
                <button onClick={auth.logout}>logout</button>
                </li>}
        </ul>
    );
};

export default NavLinks;