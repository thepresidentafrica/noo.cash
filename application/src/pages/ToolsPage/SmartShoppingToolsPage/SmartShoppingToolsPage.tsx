import { NavLink, useParams } from "react-router-dom"
import { TOOLS_DATA } from "./ToolsData"
import { JOIN_WAITING_LIST, PartnersComponent } from "../../../components"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { useForm } from "react-hook-form"
import { useMutation } from "@apollo/client"

export const SmartShoppingToolsPage = () => {
    const { suboption } = useParams();
    const [wList] = useMutation(JOIN_WAITING_LIST);
    const {register, getValues,reset} = useForm({mode:"onChange"});
    const handleWaitList = async (e: any) => {
        e.preventDefault();
      try {
         const wl = await wList({variables:getValues()})
          console.log(wl)
          reset()
      } catch (error) {
        console.log(getValues())
        console.log(error)
      }
    }
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
                                    We know that shopping is an important part of life. as such our tools help you shop smarter, better and faster. we are currently in the process of developing these tools.
                                </p>
                            </div>
                            <hr className="mb-6 border-gray-300" />
                            <div className="flex justify-between items-center">
                                {
                                    ['vasha.webp', 'pago.webp', 'virtrofi.webp', 'eit.webp'].map((item, index) => <NavLink key={index} to={`/t/smart-shopping-tools/${item.split('.')[0]}`} className="flex flex-col items-center "><img key={index} src={`/tools/${item}`} alt={item} title={item.split('.')[0]} className="w-12 h-12 rounded-full" />
                                        <p>{item.split('.')[0]}</p>
                                    </NavLink>)
                                }
                            </div>
                        </div>
                        <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
                            <div className="mb-5 font-semibold">Join the waiting list</div>

                            <p className="max-w-md px-5 mb-3 text-xs text-gray-600 sm:text-sm md:mb-5">
                                We are actively working on these features. please join our waiting list to be notified when they are ready.
                            </p>
                            <form onSubmit={handleWaitList} className="text-left p-4">
                                <p className="text-sm font-medium">Select product(s)</p>
                                <fieldset className="mt-4 space-y-4">
                                    <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                        {[{ id: 'vasha', title: 'Vasha' }, { id: 'pago', title: 'Pago' }, { id: 'virtrofi', title: 'Virtrofi' }, { id: 'eit', title: 'EIT' }].map((notificationMethod) => (
                                            <div key={notificationMethod.id} className="flex items-center">
                                                <input {...register('products')}
                                                    id={notificationMethod.id}
                                                    name="products" value={notificationMethod.id}
                                                    type="checkbox" multiple
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                                    {notificationMethod.title}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email
                                        </label>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <input
                                            {...register('email')}
                                                type="email"
                                                name="email"
                                                id="email" 
                                                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>
                                    <button className="w-full mt-4 px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-nocash hover:bg-nocash-dark">Join waiting list</button>
                                </fieldset>
                                
                            </form>


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
