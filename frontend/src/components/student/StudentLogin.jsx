import * as z from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form.jsx";
import {Button} from "../ui/button.jsx";
import {Input} from "../ui/input.jsx";
import {axiosClient} from "../../api/axios.js";
import {Loader} from "lucide-react";
import {useNavigate} from "react-router-dom";
import Studentapi from "../../services/Studentapi.jsx";
import {useUserContext} from "../../context/UserContext.jsx";
import {STUDENT_DASHBOARD_ROUTE} from "../../router/index.jsx";


const formSchema = z.object({
    email: z.string().email().min(2).max(50),
    password: z.string().min(8).max(50),
})
export default function StudentLogin() {
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "oujdimraymane@gmail.com",
            password:"1234567890"
        },
    })
    const {isSubmitting} = form.formState
    const {setAuthenticated,login} = useUserContext()
    const onSubmit =  values => {
             login(values.email,values.password).then((res) => {
                if(res.data.success === true || res.data.token){
                    localStorage.setItem('token',res.data.token)
                    setAuthenticated(true)
                    navigate(STUDENT_DASHBOARD_ROUTE)
                }
            })
            .catch(({response}) => {
                form.setError('email', {
                    message: response.data.error
                })
            })

    };

    return (

        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isSubmitting} type="submit">
                        {isSubmitting && <Loader className={"my-2 mx-2 animate-spin"} />}{'  '}  Login
                    </Button>
                </form>
            </Form>
        </>
    );
}

