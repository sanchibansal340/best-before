import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../../assets/styles/main.scss';
import { AuthContext } from '../Context/AuthContext';

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState({});
    let history = useHistory();

    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if(isAuthenticated)
            history.push('/dashboard');
    }, [isAuthenticated]);

    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setPassword2("");
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, password, password2
            }),
        })

        resetForm();

        const data = await response.json();
        if(!response.ok) {
            setError(data);
        }
        else {
            history.push("/login");
        }
    };

    return (
        <main className="Login container mt-lg-4 py-3">
            <header>
                <section className="col-sm-8 offset-s2">
                    <Link to="/" className="btn mb-3">
                        <i className="fas fa-long-arrow-alt-left"></i> 
                        {' '} Back to home
                    </Link>
                </section>
                <h4 className="text-primary">Sign Up</h4>
            </header>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">
                        Name
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control" 
                        />
                        {error.name ? (
                            <small className="text-danger fw-bold">{error.name}</small>
                        ) : ""}
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Email ID
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control" 
                        />
                        {error.email ? (
                            <small className="text-danger fw-bold">{error.email}</small>
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
                        {error.password ? (
                            <small className="text-danger fw-bold">{error.password}</small>
                        ) : ""}
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Confirm Password
                        <input 
                            type="password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            className="form-control" 
                        />
                        {error.password2 ? (
                            <small className="text-danger fw-bold">{error.password2}</small>
                        ) : ""}
                    </label>
                </div>
                <button type="submit" 
                    className="btn btn-prime btn-large btn-block"
                >
                    Sign Up
                </button>
                <p className="text-muted mt-3">
                    Already have an account? {' '}
                    <Link to="/login">Log In</Link>
                </p>
            </form>
        </main>
    )
}

export default Login;