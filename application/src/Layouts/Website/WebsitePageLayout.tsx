import { Outlet } from "react-router-dom";
import { BottomNavigation } from "../../components";
import { WebsiteNavigation } from '../../components/NavigationComponnets/WebsiteNavigation';
export const WebsitePagelayout = () => {
    return (<>
    <div className="">
        <WebsiteNavigation />
        <main className="">
            <Outlet />
        </main>
        <BottomNavigation />

    </div>
    </>
    )
}