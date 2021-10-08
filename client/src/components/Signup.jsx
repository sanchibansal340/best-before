import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/main.scss';

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

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
            <form>
                <div className="mb-3">
                    <label className="form-label">
                        Name
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control" 
                        />
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