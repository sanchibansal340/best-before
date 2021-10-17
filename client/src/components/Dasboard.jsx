import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function Dasboard() {
    const { user } = useContext(AuthContext);
    
    return (
        <main className="Dashboard container mt-lg-4 py-3">
            <h3>Hello {user.email.split('@')[0]}</h3>
        </main>
    )
}

export default Dasboard;
