import {createBrowserRouter} from 'react-router-dom'
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Users from "../pages/Users.jsx";
import Layouts from "../layout/layouts.jsx";
export const router = createBrowserRouter([
    {
        element: <Layouts />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '*',
                element: <p>Not found</p>
            },
        ]
    }
])
