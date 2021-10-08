import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/main.scss';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main className="Login container mt-lg-4 py-3">
            <header>
                <section className="col-sm-8 offset-s2">
                    <Link to="/" className="btn mb-3">
                        <i className="fas fa-long-arrow-alt-left"></i> {' '} Back to home
                    </Link>
                </section>
                <h4 className="text-primary">Log In</h4>
            </header>
            <form>
                <div className="mb-3">
                    <label className="form-label">
                        Email address
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control" 
                        />
                    </label>
                    <div className="form-text">
                        We'll never share your email with anyone else.
                    </div>
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
