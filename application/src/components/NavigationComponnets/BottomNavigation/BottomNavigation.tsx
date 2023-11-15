import { NavLink } from "react-router-dom"
import { BUTTON_NAVIGATION_DATA } from "./ButtonNavData"

export const BottomNavigation = () => {
    return (
        <>


            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full divide-x max-w-lg grid-cols-4 mx-auto font-medium">
                    {
                        BUTTON_NAVIGATION_DATA.map(({ name, href, Icon }) => (
                            <NavLink key={name} to={href} className="flex flex-col items-center justify-center">
                                <Icon className="text-graye-500 peer-active:text-nocash active:text-nocash h-8 w-6"/>
                                <span className=" text-gray-500 active:text-nocash">{name}</span>
                            </NavLink>
                        ))
                    }
                   
                </div>
            </div>

        </>
    )
}