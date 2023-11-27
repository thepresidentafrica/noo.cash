import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, OAuthProvider } from "firebase/auth"
import { FirebaseAUth } from ".";

export const Socialproviders = async ({ provider }: { provider: "google" | "github" | "apple" | "microsoft" | "facebook" }) => {

    const prov = providers[provider]

    prov.setCustomParameters({ displayName: 'OpherLabs' })
    try {
        const social: any = await FirebaseAUth({social:{provider}})
        return social
    } catch (error) {
        return null
    }


}

export const providers =
{
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
    github: new GithubAuthProvider(),
    microsoft: new OAuthProvider('microsoft.com'),
    apple: new OAuthProvider('apple.com')
}


