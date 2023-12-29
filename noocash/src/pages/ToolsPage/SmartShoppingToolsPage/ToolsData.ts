export type IToolsData = {
    name: string,
    description: string,
    url?: string
    icon?: any
}

export const TOOLS_DATA: IToolsData[] = [
        {
          "name": "PAGO (Pick and Go)", url: '/t/smart-shopping-tools/pago', icon: '/tools/pago.webp',
          "description": "PAGO is an AI-driven smart shopping tool that allows users to enter a store, pick items they want to purchase, and leave without going through a traditional checkout process. The system uses computer vision and sensors to track the items selected by the user and automatically charges their Noo.Cash account upon exit, providing a seamless and convenient shopping experience."
        },
        {
          "name": "Virtrofi (Virtual Try-On and Fitting)",  url: '/t/smart-shopping-tools/virtrofi', icon: '/tools/virtrofi.webp',
          "description": "Virtrofi is an AI-powered virtual fitting room that allows users to try on clothing and accessories virtually. Using computer vision and machine learning, Virtrofi creates a virtual representation of the user's body and overlays virtual garments, allowing them to see how items would look and fit without physically trying them on. "
        },
        {
          "name": "Vasha (Voice-Activated Shopping Assistant)", url: '/t/smart-shopping-tools/vasha', icon: '/tools/vasha.webp',
          "description": "Vasha is an AI-powered voice-activated shopping assistant that enables users to interact with the Noo.Cash platform using natural language commands. It uses natural language processing (NLP) to understand user queries and requests, allowing users to search for products, place orders, and get personalized shopping recommendations through voice interactions. "
        },
        { 
          "name": "EIT (Environmental Impact Tracker)", url: '/t/smart-shopping-tools/eit', icon: '/tools/eit.webp',
          "description": "EIT is an AI-powered tool that tracks the environmental impact of products sold on our partnering shops and mega stores platform. It uses data analytics and machine learning to assess the carbon footprint, sustainability ratings, and ethical sourcing practices of products, providing users with transparent information about the environmental impact of their purchases. "
        }
]