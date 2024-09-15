import CSSBattles from "./components/CSSBattles";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/css" element={<CSSBattles />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
