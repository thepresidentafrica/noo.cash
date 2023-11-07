import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
export const MobileRoutes= createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<div>Mobile</div>}/>
        </Route>
    )
)