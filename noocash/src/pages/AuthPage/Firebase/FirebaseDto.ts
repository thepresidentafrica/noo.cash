export declare interface IFirebaseAuth {
    custom?: {
        email: string
        password: string
        firstName?: string
        lastName?: string
        isLogin?: boolean
    }
    social?: {
        provider: IProviderTypes
    }
}

export declare type IProviderTypes = "google" | "github" | "apple" | "microsoft" | "facebook" 



/**
 * The `IAuthProviderProps` type is a union type that represents different authentication provider options such as "google", "facebook", "github", "twitter", "microsoft", "apple", and "linkedin".
 */
export declare type IAuthProviderProps = "google" | "facebook" | "github" | "twitter" | "microsoft" | "apple" | "linkedin"


/**
 * The `IAuthProvider` type is an object type that consists of two properties:
   - `provider`: A value of type `IAuthProviderProps` that represents the authentication provider.
   - `icon`: Any type that represents the icon associated with the authentication provider.
 */
export declare type IAuthProvider = {
    provider: IAuthProviderProps
    icon: any
}

/**
 * The `IScoalData` type is an object type that uses a mapped type to define 
 * properties based on the keys of `IAuthProviderProps`. 
 * Each property key is of type `IAuthProviderProps`,
 * and the corresponding value is of type `IAuthProvider`. 
 * This allows you to define a collection of authentication providers 
 * and their associated information.
 */
export declare type IScoalData = {
    [key in IAuthProviderProps]: IAuthProvider
}

export declare interface IVirtualROuter {
    Candidate: string
    Client: string
}


