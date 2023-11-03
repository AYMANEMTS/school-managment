import {Outlet} from "react-router-dom";
import {HomeIcon, LogInIcon} from "lucide-react";
import {Link} from "react-router-dom"
function Layouts() {
    return (
        <>
            <header>
                <div
                    className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto shadow-2xl">
                    <div className="text-2xl text-white font-semibold inline-flex items-center">
                        Shool management
                    </div>
                    <div>
                        <ul className="flex text-white">
                            <li className="ml-5 px-2 py-1">
                                <Link className={'flex'} to={'/'}><HomeIcon className={'mx-1'} /> Home page</Link>
                            </li>
                            <li className="ml-5 px-2 py-1">
                                <Link className={'flex'} to={"/login"}><LogInIcon className={'mx-1'}/> Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className={"container"}>
                <Outlet/>
            </main>
            {/*<footer>footer</footer>*/}
        </>
    );
}

export default Layouts;
