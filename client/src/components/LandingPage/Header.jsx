import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import '../../assets/styles/main.scss';
import { useHistory } from 'react-router';

function Header() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    let history = useHistory();

    const logoutUser = () => {
        setIsAuthenticated(false);
        localStorage.clear();
        history.push("/login");
    }

    return (
        <nav className="Header navbar navbar-light container py-3 ps-4">
            <h3 className="fst-italic">best before</h3>
            {isAuthenticated ? (
                <button onClick={logoutUser} type="reset" className="btn btn-prime">
                    Log Out
                </button>
            ) : null }
        </nav>
    )
}

export default Header;
