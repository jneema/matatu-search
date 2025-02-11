import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/landing-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
