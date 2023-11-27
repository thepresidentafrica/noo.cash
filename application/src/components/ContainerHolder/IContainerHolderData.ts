import { IContainerHolderData } from "./ContainerHolderDto";

export const CONTAINER_HOLDER_DATA :IContainerHolderData= {
    shoppers: {
        name: "shoppers",
        title: "For Consumers",
        image: {
            src: "/for-shoppers.webp",
            alt: "Shoppers"
        },
        description: `Discover seamless shopping with noo.cash – your go-to platform for effortless in-store and online experiences. We simplify your journey with a curated selection of diverse products and a streamlined payment process. Shop confidently with us, as we provide essential accessories to make your transactions simple and secure. Elevate your shopping experience with noo.cash – where convenience meets innovation.`,
        cta: {
            label: "Create Consumer Account",
            url: "/auth/register?role=consumer"
        }
    },
    shops: {
        name: "shops",
        title: "For Service Providers",
        image: {
            src: "/shops.webp",
            alt: "Shoppers"
        },
        cta: {
            label: "Register Your Service",
            url: "/auth/register?role=service-provider"
        },
        description: "As a shop or store owner you can use our AI custom tailored platform to sell your products. We have a wide variety helpful tools for shops to sell their products. ",
    },
    accessories: {
        name: "accessories",
        title: "for Accessories",
        image: {
            src: "/accessories.webp",
            alt: "Shoppers"
        },
        description: "The following Accessories are available for any use. We will be adding more accessories in the future. ",
    },
    promotions: undefined,
    kits: undefined,
    products: undefined
}