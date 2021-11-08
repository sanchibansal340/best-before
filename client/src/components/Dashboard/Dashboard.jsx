import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import SearchBar from './SearchBar';

function Dashboard() {
    const { user } = useContext(AuthContext);
    
    return (
        <main className="Dashboard container text-center mt-lg-4 py-3">
            <section className="row mx-auto">
                <h4>
                    Hello {user.name[0].toUpperCase() + user.name.substring(1)}!
                </h4>
                <a href="/addItem" 
                    role="button" 
                    className="btn btn-lg btn-prime mb-3"
                >
                    Add More Items
                </a>
                <SearchBar />
            </section>
        </main>
    )
}

export default Dashboard;
