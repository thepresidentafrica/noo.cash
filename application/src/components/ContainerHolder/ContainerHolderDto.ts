export declare type IContainerHolderTypes = "shoppers" | "shops" | "accessories" | "promotions" | "kits" | "products";

export declare type IContainerHolderData = {
    [key in IContainerHolderTypes]: IContainerHolder |undefined
}

export declare interface IContainerHolder {
    name: IContainerHolderTypes
    title: string
    image: {
        src: string
        alt: string
    }
    description: string
    cta?: {
        label: string
        url: string
    }
}