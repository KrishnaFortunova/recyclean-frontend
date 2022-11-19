import { React, createContext, useState, useEffect, useContext} from "react";
import axios from '../api/axios';

const AuthContext = createContext({
    auth: null,
    setAuth: () => {},
    user: null,
});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState(null);

    useEffect(() => {
        const isAuth = async () => {
          try {
            const response = await axios.get(
              '/auth',
              { withCredentials: true }
            );
          
            setUser(response?.data);
          } catch(error) {
            setUser(null);
          };
        };
    
        isAuth();
      }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;