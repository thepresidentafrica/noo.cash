import { CONTAINER_HOLDER_DATA, IContainerHolder, IContainerHolderTypes } from "."
import { NavLink } from "react-router-dom"
export const ContainerHolder = ({ children, name }: any) => {
    const content: IContainerHolder | undefined = CONTAINER_HOLDER_DATA[name as IContainerHolderTypes]
    return (
        <>
            <div className="grid sm:grid-cols-2">
                <div className="left">
                    <img src={content?.image?.src} alt={content?.image?.alt} />
                </div>
                <div className="right-s space-y-5">
                    <h1 className="text-4xl">{content?.title}</h1>
                    <p>{content?.description}</p>
                   <div className="w">
                   <NavLink to={content?.cta?.url as string} className="px-6 py-3 my-6  bg-nocash-500 text-white hover:text-white rounded-full hover:bg-nocash-600 transition duration-300">
                        {content?.cta?.label}
                    </NavLink>
                   </div>
                    {children}
                </div>
            </div>
        </>
    )
}