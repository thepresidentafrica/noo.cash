import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
import { IFirebaseAuth, IProviderTypes } from "./FirebaseDto";
import { providers } from ".";
import { DEBUG } from "../../../utils";
import { getAuth } from "firebase/auth";

/**
 * Authenticates the user with Firebase.
 *
 * @param {IFirebaseAuth} data - The data needed for authentication.
 * @return {Promise<any>} The result of the authentication process.
 */
export const FirebaseAUth = async (data: IFirebaseAuth): Promise<any | null> => {
    const auth = getAuth()
    try {
        if (!data.social) {
            const { custom: { email, password, firstName, lastName,isLogin } } = data as any
            if(isLogin){
                const user = await signInWithEmailAndPassword(auth, email, password)
                return user
            }
            const user = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(user.user, {
                displayName: `${firstName} ${lastName}`
            })
            return user
        }
        const user = await signInWithPopup(auth, providers[data.social?.provider as IProviderTypes]);
        return user
    } catch (error) {
        DEBUG(error)
        return null
    }

}