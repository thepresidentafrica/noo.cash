import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {WebsiteNavigation} from "../components";
import { WebsiteHomePage } from "../pages";
export const WebsiteRoutes= createBrowserRouter(
    createRoutesFromElements(
        <Route element={<WebsiteNavigation/>}>
            <Route path="/" element={<WebsiteHomePage/>}/>
        </Route>
    )
)