import { FC } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { DEBUG } from "../../../utils";
import { Socialproviders } from "./SocialProviders";
import { IAuthProviderProps } from ".";
import { AUTHENTICATE } from "..";
export const SocialLogin: FC<{ providers: IAuthProviderProps[], }> = ({ providers, }) => {
    const [verifyToken] = useMutation(AUTHENTICATE)
    const nav = useNavigate()
    const { option, role } = useParams()
    /**
     * Handles social login functionality.
     *
     * @param {any} e - The event object.
     * @return {Promise<void>} - A promise that resolves to void.
     */
    const socialLogin = async (e: any) => {
        const { id } =         e.target.closest('button');
        const provider = id.split("_")[0]
        try {
            const social: any = await Socialproviders({ provider })
            if (social) {
                const { data } = await verifyToken({
                    variables: {
                        input: {
                            token: social.user['accessToken'],
                            option,
                            role: (role as string)?.charAt(0).toUpperCase() + (role as string)?.slice(1)
                        }
                    }, context: {
                        clientName: 'auth'
                    }
                })
                if (data && data.firebaseVerfyIdToken && data.firebaseVerfyIdToken.success) {
                    nav(`/${role}`)
                }
            }
            DEBUG(social)
        } catch (error) {
            DEBUG(error)
        }
    }
    return (
        <>
            
            <div className=" flex justify-between items-center space-x-6 divide-x">
                    {/* <div className="text-xs sm:text-base capitalize">You may also {option?option:'login'} With</div> */}
                <div className="flex px-4 space-x-3 divide-x" key={option}>
                    {providers.map((provider: IAuthProviderProps) => {
                        return (
                               <button key={provider}  className="p-0  rounded-full border shadow-sm " id={`${provider}_main`} onClick={socialLogin}>
                               <img   className="w-8 h-8" id={`${provider}_svg`} src={`/social/${provider}.svg`} />
                               </button>
                        )
                    })}
                </div>
                </div>
        </>
    )

}
