import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Pages/Quiz";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/start" element={<Quiz />} />
    </Routes>
  );
}

export default App;
