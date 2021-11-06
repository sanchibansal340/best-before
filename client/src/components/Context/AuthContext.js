import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    // To persist login
    useEffect(() => {
        if(localStorage.getItem('token') === null) {
            setIsAuthenticated(false);
            setUser({});
        }
        else {
            setIsAuthenticated(true);
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    }, []);

    return (
        <AuthContext.Provider 
            value={{user, setUser, isAuthenticated, setIsAuthenticated}}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
