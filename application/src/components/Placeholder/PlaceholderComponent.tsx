import { Logo } from ".."

export const PlaceholderComponent = () => {
    return (

        <>
            <div className="flex justify-center items-center h-screen w-full">
                <div className="e   divide-x  flex justify-center items-center  ">
                    <div className="w p-3  space-x-6  animate-pulse ">
                        <Logo ></Logo></div>
                    <p className="p-3">Development in progress</p>
                </div>
            </div>
        </>
    )
}