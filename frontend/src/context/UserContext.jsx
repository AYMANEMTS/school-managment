import {createContext, useContext, useState} from "react";
import StudentDashbordLayout from "../layout/student/StudentDashbordLayout.jsx";
import Studentapi from "../services/Studentapi.jsx";
import {useNavigate} from "react-router-dom";

export const StateUserContext = createContext({
    user:{},
    setUser:() => {},
    login: () => {},
    logout: () => {},
    authenticated: false,
    setAuthenticated: () => {},

})
export default function UserContext({children}) {
    const [authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState({})
    const login = async (email,password) => {
        await Studentapi.getCsrfToken()
        return await Studentapi.login(email,password)
    }
    const logout = () => {
        localStorage.removeItem('token')
        setAuthenticated(false)
    }
    return (
        <>
            <StateUserContext.Provider value={{
                user,
                setUser,
                authenticated,
                setAuthenticated,
                login,
                logout
            }}  >
                {children}
            </StateUserContext.Provider>
        </>
    );
}

export const useUserContext = () => {return  useContext(StateUserContext) }
