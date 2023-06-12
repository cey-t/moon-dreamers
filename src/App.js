import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import styles from "./index.scss";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
import NavBar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className={styles.appContainer}>
      <Router>
        {/* <ScrollToTop /> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
