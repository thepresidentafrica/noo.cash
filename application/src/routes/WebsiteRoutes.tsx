import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { AuthPage, WebsiteHomePage } from "../pages";
import { WebsitePagelayout } from "../Layouts";
import { GeneralRoutes } from "./GeneralRoutes";
export const WebsiteRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<WebsitePagelayout />}> 
                <Route index path="/" element={<WebsiteHomePage />} />
                
            </Route>
            <Route path="/auth">
                <Route index path="/auth" element={<AuthPage />} />
                <Route path="/auth/:option" element={<AuthPage />} />
            </Route>
            
            {GeneralRoutes}
        </Route>
    )
)