import { Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { LegalPage } from "../pages";
import { WebsitePagelayout } from "../Layouts";

export const GeneralRoutes = (
    <Route>
    <Route path="/legal" element={ <WebsitePagelayout/>} >
        <Route path="/legal/:option" element={<LegalPage />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
    </Route>
  );