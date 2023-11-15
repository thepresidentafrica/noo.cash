import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { WebsiteHomePage } from "../pages";
import { WebsitePagelayout } from "../Layouts";
export const WebsiteRoutes= createBrowserRouter(
    createRoutesFromElements(
        <Route element={<WebsitePagelayout/>}>
            <Route path="/" element={<WebsiteHomePage/>}/>
            <Route path="/auth">
                <Route index path="/auth" element={<div>Login</div>}/>
                <Route path="/auth/:option" element={<div>Login</div>}/>
            </Route>
        </Route>
    )
)