import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import styles from "./index.scss";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
import NavBar from "./Components/Navbar/Navbar";
import Products from "./Pages/Products/Products";
import Collections from "./Pages/Collections/Collections";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className={styles.appContainer}>
      <Router>
        {/* <ScrollToTop /> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkımızda" element={<AboutMe />} />
          <Route path="/ürünler" element={<Products />} />
          <Route path="/koleksiyonlar" element={<Collections />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
