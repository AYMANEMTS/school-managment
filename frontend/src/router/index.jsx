import {createBrowserRouter} from 'react-router-dom'
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Users from "../pages/Users.jsx";
import Layouts from "../layout/layouts.jsx";
import Dashbord from "../components/student/Dashbord.jsx";
import GuestLayouts from "../layout/GuestLayouts.jsx";
import StudentDashbordLayout from "../layout/student/StudentDashbordLayout.jsx";
export const STUDENT_DASHBOARD_ROUTE = '/student/dashboard'
export const LOGIN_ROUTE = '/login'
export const router = createBrowserRouter([
    {
        element: <Layouts />,
        children: [
            {
                path: '/',
                element: <Home />
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
    },
    {
        element: <GuestLayouts />,
        children: [
            {
                path: LOGIN_ROUTE,
                element: <Login />
            },
        ]
    },
    {
        element: <StudentDashbordLayout />,
        children: [
            {
                path: STUDENT_DASHBOARD_ROUTE,
                element: <Dashbord />
            },
        ]
    },
])
