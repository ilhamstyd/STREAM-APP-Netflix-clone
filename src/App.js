import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Homepages } from "./home/HomePages";
import { Footer } from "./components/footer/Footer";
import { SinglePage } from "./components/watch/SinglePage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Homepages}/>
          <Route exact path="/single-page/:id" Component={SinglePage}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
