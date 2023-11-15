import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {WebsiteNavigation} from "../components";
import { WebsiteHomePage } from "../pages";
export const WebsiteRoutes= createBrowserRouter(
    createRoutesFromElements(
        <Route element={<WebsiteNavigation/>}>
            <Route path="/" element={<WebsiteHomePage/>}/>
            <Route path="/auth">
                <Route index path="/auth" element={<div>Login</div>}/>
                <Route path="/auth/:option" element={<div>Login</div>}/>
            </Route>
        </Route>
    )
)