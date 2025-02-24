import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/landing-page";
import ThikaRoadTable from "./components/matatu-table";
import Layout from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/routes/thika-road" element={<ThikaRoadTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
