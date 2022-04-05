import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Praktika1 from "./components/Praktika1";
import Praktika2 from "./components/Praktika2";
import Praktika3 from "./components/Praktika3";
import './components/LessText.css'





function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/praktika1">Praktika 1</Link>
          <Link to="/praktika2">Praktika 2</Link>
          <Link to="/praktika3">Praktika 3</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/praktika1" element={<Praktika1 />} />
        <Route path="/praktika2" element={<Praktika2 />} />
        <Route path="/praktika3" element={<Praktika3 />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer>
        <p>Footer</p>
      </footer>
    </Router>
  );
}

export default App;
