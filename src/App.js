import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Pages/Quiz";
import LandingPage from "./Pages/LandingPage";
import ChoosePage from "./Pages/ChoosePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/choose" element={<ChoosePage />} />
    </Routes>
  );
}

export default App;
