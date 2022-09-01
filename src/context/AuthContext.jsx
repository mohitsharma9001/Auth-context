import React from "react";


export const AuthContext = React.createContext();


export const AuthContextProvider = ({children}) =>{ 

    const [isAuth, setIsAuth] = React.useState(false);

    function toggleAuth(auth){
        setIsAuth(auth)
    }
    
    return <AuthContext.Provider value={{isAuth, toggleAuth }} >
        {children}
    </AuthContext.Provider> 
}