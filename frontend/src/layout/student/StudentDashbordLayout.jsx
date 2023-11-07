import {Outlet, useNavigate} from "react-router-dom";
import {GaugeIcon, HomeIcon, LogInIcon} from "lucide-react";
import {Link} from "react-router-dom"
import {useEffect} from "react";
import {axiosClient} from "../../api/axios.js";
import StudentApi from "../../services/Studentapi.jsx";
import {useUserContext} from "../../context/UserContext.jsx";
import {Button} from "../../components/ui/button.jsx";
import StudentDropDownMenu from "../../components/student/StudentDropDownMenu.jsx";
import {STUDENT_DASHBOARD_ROUTE} from "../../router/index.jsx";
import {StudentSidebar} from "./administration/StudentSidebar.jsx";
import {ModeToggle} from "../../components/mode-toggle.jsx";
import Logo from "../../components/Logo.jsx";
export default function StudentDashbordLayout() {
    const token = localStorage.getItem('token')
    const {setUser,user} = useUserContext()
    useEffect(() => {
        if(!token){
            navigate("/login")
        }
        StudentApi.getUser().then(({data}) => {
            setUser(data)
        })

    },[])
    useEffect(() => {
        if(!token){
            navigate("/login")
        }
    }, [token])

    return (
        <>
            <header>
                <div
                    className="items-center justify-between flex bg-opacity-90 px-12 py-4 mb-4 mx-auto ">
                    <div className="text-2xl text-white font-semibold inline-flex items-center">
                        <Logo />
                    </div>
                    <div>
                        <ul className="flex text-white place-items-center">
                            <li className="ml-5 px-2 py-1">
                                <Button>
                                <Link className={'flex'} to={STUDENT_DASHBOARD_ROUTE}><GaugeIcon className={'mx-1'} />Dashboard</Link>
                                </Button>
                            </li>
                            <li className="ml-5 px-2 py-1">
                                <StudentDropDownMenu />
                            </li>
                            <li className="ml-5 px-2 py-1">
                                <ModeToggle />
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <hr/>
            <main className={"mx-auto px-10 space-y-4 py-4"}>
                <div className={"flex"}>
                    <div className={"w-100 md:w-1/4"}>
                        <StudentSidebar />
                    </div>
                    <div className={"w-100 md:w-3/4"}>
                        <Outlet/>
                    </div>
                </div>
            </main>
            {/*<footer>footer</footer>*/}
        </>
    );
}

