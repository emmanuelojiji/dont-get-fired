import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Pages/Quiz";
import Intro from "./Components/Intro";

function App() {
  return (
    <Routes>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/" element={<Intro />} />
    </Routes>
  );
}

export default App;
