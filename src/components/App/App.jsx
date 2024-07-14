import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";

export default function App() {
    return (
        <div className={css.container}>
            <Navigation/>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
            </Routes>
        </div>
    );
}