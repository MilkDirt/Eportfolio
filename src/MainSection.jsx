import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";

/**
 * Component representing the whole application.
 * @return {JSX.Element} The rendered component.
 * @constructor
 */
export function MainSection (){
    return (
        <main>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </main>
    );
}