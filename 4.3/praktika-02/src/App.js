import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <div className='container'>
      <div className='row'>
        {/* <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/profile"> Profile </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router> */}

        <Task />
        <Task2 />
        <Task3 />
        <Task4 />
        <Task5 />
        <Task6 />
      </div>
    </div>


  );
}

export default App;

