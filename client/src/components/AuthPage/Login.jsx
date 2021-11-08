import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../../assets/styles/main.scss';
import { AuthContext } from '../Context/AuthContext';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    let history = useHistory();
    const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);

    useEffect(() => {
        if(isAuthenticated) history.push('/dashboard');
    }, [isAuthenticated]);

    const resetForm = () => {
        setEmail("");
        setPassword("");
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            }),
        })

        resetForm();

        const data = await response.json();
        if(!response.ok) {
            setError(data);
        }
        else {
            const { token, user } = data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            setIsAuthenticated(true);
            setUser(user);

            history.push("/dashboard");
        }
    };

    return (
        <main className="Login container mt-lg-4 py-3">
            <header>
                <section className="col-sm-8 offset-s2">
                    <Link to="/" className="btn mb-3">
                        <i className="fas fa-long-arrow-alt-left"></i> 
                        {' '} 
                        Back to home
                    </Link>
                </section>
                <h4 className="text-primary">Log In</h4>
            </header>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">
                        Email address
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control" 
                        />
                        {(error.email || error.emailNotFound) ? (
                            <small className="text-danger fw-bold">
                                {error.email}
                                <br />
                                {error.emailNotFound}
                            </small>
                        ) : ""}
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Password
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control" 
                        />
                        {(error.password || error.passwordIncorrect) ? (
                            <small className="text-danger fw-bold">
                                {error.password}
                                <br />
                                {error.passwordIncorrect}
                            </small>
                        ) : ""}
                    </label>
                </div>
                <button type="submit" 
                    className="btn btn-prime btn-large btn-block"
                >
                    Log In
                </button>
                <p className="text-muted mt-3">
                    Don't have an account?  {' '}
                    <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </main>
    )
}

export default Login;
