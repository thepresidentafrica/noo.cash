import { Outlet } from "react-router-dom";
import { BottomNavigation } from "../../components";
import { WebsiteNavigation } from '../../components/NavigationComponnets/WebsiteNavigation';
export const WebsitePagelayout = () => {
    return (<>
    <div className="onverflow-x-hidden bg-nocash-20">
        <WebsiteNavigation />
        <main className="">
            <Outlet />
        </main>
        <BottomNavigation />

    </div>
    </>
    )
}