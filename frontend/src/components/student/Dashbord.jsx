import {useUserContext} from "../../context/UserContext.jsx";

export default function Dashbord() {
    const {user} = useUserContext()
    return (
        <>
            {JSON.stringify(user)}
            <h1>dashbord student</h1>
        </>
    );
}

