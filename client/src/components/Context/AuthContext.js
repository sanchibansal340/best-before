import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider 
            value={{user, setUser, isAuthenticated, setIsAuthenticated}}
        >
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
