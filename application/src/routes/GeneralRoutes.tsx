import { Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const GeneralRoutes = (
      <Route path="*" element={<ErrorPage />} />
  );