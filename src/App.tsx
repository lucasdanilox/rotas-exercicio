import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./routes/MainPage";
import Promotion from "./routes/Promotion";
import Enrollment from "./routes/ Enrollment ";

export default function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<MainPage />} />
                    <Route path="promotion" element={<Promotion />} />
                    <Route path="enrollment" element={<Enrollment />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


