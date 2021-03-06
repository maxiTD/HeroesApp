import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { types } from "../../types/types";
import { AuthContext } from '../../auth/authContext';


export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate()
    
    const handleLogout = () => {

        dispatch({
            type: types.logout
        });

        localStorage.removeItem('user');

        //redireccionar al login
        navigate( '/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Búsqueda
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        { user.name }
                    </span>

                    <button
                        className="nav-item nav-link btn bt-primary"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}