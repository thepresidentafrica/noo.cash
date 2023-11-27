import { NavLink } from "react-router-dom";
import { Logo } from "../../../components";
import {useForm} from "react-hook-form"
import { DEBUG } from "../../../utils";
import { SocialLogin } from "..";
export const LoginForm = () => {
    const {register,getValues,reset}=useForm({mode:"onChange"})
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        DEBUG(getValues())
        try {
            reset()
        } catch (error) {
            
        }
    }
    return (<>
        <form onSubmit={handleSubmit}>

            <div className="m-auto xl:container px-12 sm:px-0 mx-auto min-w-5xl w-5xl">
                <div className="mx-auto h-full sm:w-max">
                    <div className="m-auto  py-12">
                        <div className="space-y-4">
                            <Logo text="noo.cash" />
                        </div>
                        <div className="mt-12 space-y-6 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
                            <div className="e">
                                <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">Login to your account</h3>
                                <p className="text-gray-500 text-sm"> To proceed, login here  or create a new account</p>

                                </div>
                            <div className="mt-12 flex flex-col justify-start items-center">
                              <SocialLogin providers={["github", "google", "microsoft", "apple", "linkedin"]}/>
                            </div>
                            <div>
                            <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-nocash-400 dark:before:bg-nocash-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input {...register("email", {required: true})} required id="email" name="email" type="" placeholder="Your E-mail Address" className="w-full bg-transparent pb-3 border-l-non border-r-non border-t-none border-b border-b-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-6 items-end">
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-nocash-400 dark:before:bg-nocash-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input id="" type="Your password" placeholder="Your answer" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                                <button type="reset" className="-mr-3 w-max p-3">
                                    <span className="text-sm tracking-wide text-nocash-600 dark:text-nocash-400">Forgot password ?</span>
                                </button>
                            </div>
                            <div>
                                <button
                                    className="w-full rounded-full bg-nocash-500 dark:bg-nocash-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-nocash-600 focus:bg-nocash-600 active:bg-nocash-800"
                                >
                                    <span className="text-base font-semibold text-white dark:text-gray-900">Login</span>
                                </button>
                                <NavLink to={"/auth/register"} type="reset" className="-ml-3 w-max p-3">
                                    <span className="text-sm tracking-wide text-nocash-600 dark:text-nocash-400">Create new account</span>
                                </NavLink>
                            </div>
                        </div>
                        <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
                            <div className="space-x-4 divide-x text-center">
                                <NavLink className={'text-sm'} to={"/"}> &copy; noo.cash</NavLink>
                                <NavLink to="/contact" className="text-sm hover:text-nocash-900 dark:hover:text-gray-300">Contact</NavLink>
                                <NavLink to="/privacy" className="text-sm hover:text-nocash-900 dark:hover:text-gray-300">Privacy & Terms</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    </>)
}