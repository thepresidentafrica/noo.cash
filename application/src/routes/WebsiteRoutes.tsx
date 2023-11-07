import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
export const WebsiteRoutes= createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<div>Website Application</div>}/>
        </Route>
    )
)