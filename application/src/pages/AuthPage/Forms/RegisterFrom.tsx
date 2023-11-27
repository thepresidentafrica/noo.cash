import { NavLink } from "react-router-dom"
import { Logo } from "../../../components"
import { SocialLogin } from "..";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const RegisterForm = () => {
    const { register, getValues, reset, formState:{ errors } } = useForm({ mode: "onChange" });
    const [state, _setState] = useState({
        submitting: false, showPassword: false
    })
    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const dat =getValues()
            console.log(dat)
            reset()
        } catch (error) {
            console.log(error)
        } finally {
            console.log(errors)
        }
    }
    return (<>
        <form onSubmit={handleRegister}>

            <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
                <div className="mx-auto h-full sm:w-max">
                    <div className="m-auto  py-12">
                        <div className="space-y-4">
                            <Logo text="noo.cash" />
                        </div>
                        <div className="mt-12 space-y-6 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
                            <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">Create an  account</h3>
                            <div className="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
                                <SocialLogin providers={["apple","github", "google", "microsoft"]} />
                            </div>
                            <div>
                                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-nocash-400 dark:before:bg-nocash-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input {...register("email", { required: true })} id="" type="" name="email" placeholder="E-mail Address" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-nocash-400 dark:before:bg-nocash-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input {...register("firstName", { required: true })}  name={"firstName"} id="" type="" placeholder=" FirstName" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-nocash-400 dark:before:bg-nocash-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input  {...register("lastName", { required: true })} name="lastName" id="" type="" placeholder="LastName" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>

                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-nocash-400 dark:before:bg-nocash-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input  {...register("phoneNumber",  { required: true })} name="phoneNumber" id="" type="" placeholder="Phone number" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-nocash-400 dark:before:bg-nocash-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input {...register("password", { required: true })} name="password" id="" type="" placeholder="Password" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-nocash-400 dark:before:bg-nocash-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input  {...register("repassword", { required: true })} name="repassword" id="" type="" placeholder="Repeat  Password" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>

                            </div>
                            <div>
                                <button type="submit" disabled={state.submitting}
                                    className="w-full rounded-full bg-nocash-500 dark:bg-nocash-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-nocash-600 focus:bg-nocash-600 active:bg-nocash-800"
                                >
                                    <span className="text-base font-semibold text-white dark:text-gray-900">Create Account</span>
                                </button>
                                <NavLink to={"/auth"} className="-ml-3 w-max p-3">
                                    <span className="text-sm">Do you have an account?</span> <span className="text-sm tracking-wide text-nocash-600 dark:text-nocash-400">Login here</span>
                                </NavLink>
                            </div>
                        </div>
                        {/* <p>{errors.root?.message}</p> */}
                        <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
                            <div className="space-x-4 text-center">
                                <span>&copy; noo.cash</span>
                                <a href="#" className="text-sm hover:text-nocash-900 dark:hover:text-gray-300">Contact</a>
                                <a href="#" className="text-sm hover:text-nocash-900 dark:hover:text-gray-300">Privacy & Terms</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>)
}