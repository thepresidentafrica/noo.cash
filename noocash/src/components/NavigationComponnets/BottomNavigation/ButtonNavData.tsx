import { IButtonNavData } from "./ButtonNavDto";
import { CgSmartHomeHeat } from "react-icons/cg";
import { GoContainer } from "react-icons/go";
import { GoTelescope } from "react-icons/go";
import { GoShieldLock } from "react-icons/go";
export const BUTTON_NAVIGATION_DATA:IButtonNavData[] = [
    { name: 'Home', href: '/#home', Icon: CgSmartHomeHeat },
    { name: 'Features', href: '/#features', Icon: GoContainer  },
    { name: 'Explore', href: '/#how-it-works', Icon: GoTelescope },
    { name: 'Login', href: '/auth', Icon: GoShieldLock  },

]