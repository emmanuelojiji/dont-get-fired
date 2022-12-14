import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Pages/Quiz";
import LandingPage from "./Pages/LandingPage";
import ChoosePage from "./Pages/ChoosePage";

function App() {
  return (
    <Routes>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/" element={<ChoosePage />} />
    </Routes>
  );
}

export default App;
