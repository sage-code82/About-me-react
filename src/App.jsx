import "./App.css";
import Home from "./pages/Home";
import Dice from "./pages/Dice";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>ALL ABOUT ME</h1>
        <Link to="/">Home</Link>
        <Link to="/dice">Dice</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dice" element={<Dice />} />
      </Routes>

      <footer>
        <p>&copy; Stephen Sage 41 and 1 quarter</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
