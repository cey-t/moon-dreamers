import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import styles from "./index.scss";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
import NavBar from "./Components/Navbar/Navbar";
import Products from "./Pages/Products/Products";
import Collections from "./Pages/Collections/Collections";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/LoginForm/Login";
import SignUp from "./Pages/SignUpForm/SignUp";

function App() {
  return (
    <div className={styles.appContainer}>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkımızda" element={<AboutMe />} />
        <Route path="/ürünler" element={<Products />} />
        <Route path="/koleksiyonlar" element={<Collections />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
