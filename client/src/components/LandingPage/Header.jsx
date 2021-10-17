import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import '../../assets/styles/main.scss';
import { useHistory } from 'react-router';

function Header() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    let history = useHistory();

    const logoutUser = () => {
        setIsAuthenticated(false);
        history.push("/login");
    }

    return (
        <nav className="Header container-fluid py-3 ps-4">
            <section className="col-lg-6">
                <h3 className="fst-italic">best before</h3>
                {isAuthenticated ? (
                    <button onClick={logoutUser} className="btn btn-second">
                        Log Out
                    </button>
                ) : null }
            </section>
        </nav>
    )
}

export default Header;
