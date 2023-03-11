import { Routes, Route } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { routes } from "./routes";

export const Router: React.FC = () => {
    return <Routes>
        <Route path={routes.root} element={<MainPage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>;
};
