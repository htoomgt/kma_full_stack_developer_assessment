import "./App.css";
import SpalashPage from "./pages/SpalashPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLoadRegisteredUser from "./customHooks/useLoadRegisteredUser";
import useNavigatePageOnReload from "./customHooks/useNavigatePageOnReload";

function App() {
    useLoadRegisteredUser();

    useNavigatePageOnReload();

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SpalashPage />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
