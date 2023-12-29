import { useParams } from "react-router-dom"
import { TOOLS_DATA } from "./ToolsData"
import { PartnersComponent } from "../../../components"

export const SmartShoppingToolsPage = () => {
    const { suboption } = useParams()
    return (<>
        <div className="div py-4 my-4 mx-auto sm:max-w-7xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col justify-between lg:flex-row">
                        <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    We are creating a <span className="text-nocash">smart shopping experience</span>
                                    <br className="hidden md:block" />
                                    for everyone{' '}
                                    <span className="inline-block text-deep-purple-accent-400">
                                        in Africa
                                    </span>
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae. explicabo.
                                </p>
                            </div>
                            <hr className="mb-6 border-gray-300" />
                            <div className="flex">
                                <a href="/" aria-label="Play Song" className="mr-3">
                                    <div className="flex items-center justify-center w-10 h-10 text-white transition duration-300 transform rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:scale-110">
                                        <svg className="w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                                        </svg>
                                    </div>
                                </a>
                                <div className="flex flex-col">
                                    <div className="text-sm font-semibold">
                                        Rich the kid &amp; Famous Dex
                                    </div>
                                    <div className="text-xs text-gray-700">Rich Forever Intro</div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
                            <div className="mb-5 font-semibold">Join the waiting list</div>
                           
                            <p className="max-w-md px-5 mb-3 text-xs text-gray-600 sm:text-sm md:mb-5">
                                We are actively working on these features. please join our waiting list to be notified when they are ready.
                            </p>
                           
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none"
                            >
                                Sign Up with Email
                            </a>
                        </div>
                    </div>
                </div>
                {!suboption && <div >
                    {
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lgs:grid-cols-3">

                                <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                                    {TOOLS_DATA.map((feature) => (
                                        <div key={feature.name}>
                                            <dt className="text-xl h-16 flex justify-start items-center  space-x-3 font-semibold leading-7 text-gray-900">
                                                <div className="h-12 w-12  rounded-lg ">
                                                    <img src={feature.icon} className="w-full" alt="" />
                                                </div>
                                                <p>
                                                    {feature.name}
                                                </p>
                                            </dt>
                                            <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    }
                    <div className="f">
                        <h2 className="text-xl font-semi-bold">
                            Trusted by:
                        </h2>
                        <PartnersComponent styles="h-" partners={['pep.svg', 'ackermans.png', 'shoprite.png']} />
                    </div>
                </div>
                }

            </div>

        </div>
    </>)

}
