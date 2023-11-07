
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
export const DesktopRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<div>Desktop Application</div>} />
        </Route>
    )
)