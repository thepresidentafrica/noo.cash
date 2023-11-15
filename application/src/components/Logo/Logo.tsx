import { FC } from "react"
import { NavLink } from "react-router-dom"

export const Logo: FC<{ text?: string }> = ({ text }) => {
    return (
        <>
            <NavLink to="/#home" className='flex  justify-start items-center space-x-3'>
                <span className="sr-only">noo.cash</span>
                <img
                    className="h-8 w-auto sm:h-10"
                    src="/logo.svg"
                    alt=""
                />
                {text && <p className='sm:text-4xl text-2xl text-nocash'>{text}</p>}
            </NavLink>
        </>
    )
}