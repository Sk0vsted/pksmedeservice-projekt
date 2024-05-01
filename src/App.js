import "./App.css";
import Header from "./components/header";
import Button from "./components/button";
import Card from "./components/card";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import React, { useEffect, useRef } from "react";
import TitleBreak from "./components/titleBreak";
import About from "./components/about";
import Footer from "./components/footer";
import Copyright from "./components/copyright";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Interiørarbejde from "./pages/interiorarbejde";
import Error404 from "./pages/404";
import Kontakt from "./pages/kontakt";
import MetalOgRustfrit from "./pages/metal-og-rustfrit";
import Privatlivspolitik from "./pages/privatlivspolitik";
import Galleri from "./pages/galleri";
import OmOs from "./pages/om-os";
import GelænderOgAltaner from "./pages/gelaendere-og-altaner";
import MonteringAfStaalkonstruktioner from "./pages/montering-af-staalkonstruktioner";
import process from "process";
window.process = process;

require("dotenv").config();

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="main-content">{children}</div>
      <Footer />
      <Copyright />
    </div>
  );
};

const Home = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const headerHeight = header.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`
      );
    }
  }, []);

  return (
    <div>
      <Header ref={headerRef} />
      <Hero
        title={"Velkommen til PK Smedeservice ApS"}
        description={
          "Vi har 18 års erfaring inden for metalarbejde, interiørarbejde og industri-smederi."
        }
      />

      <TitleBreak
        title={"Services"}
        subtitle={"Hvad tilbyder vi?"}
        bgClass={"bg-gray-100"}
        titleColor={"text-dark"}
        subtitleColor={"text-gray-400"}
      />

      <div className="cardWrapper flex justify-around px-16 bg-gray-100 flex-col sm:px-0 md:px-0 lg:flex-col xl:flex-row">
        <Card
          title="Interiørarbejde"
          description="Vi laver alt inden for interiørarbejde. Vi har 18 års erfaring og kan hjælpe dig med at skabe det perfekte interiør til dit hjem eller din virksomhed."
          buttonLabel="Se mere"
        />

        <Card
          title="Metal og rustfrit"
          description="Står du og mangler en smed til at lave noget indenfor metal, både rustfrit og alm. stål, så er vi klar til at hjælpe dig. Vi kan lave alt fra små til store opgaver."
          buttonLabel="Se mere"
        />

        <Card
          title="Gelændere og altaner"
          description="Ønsker du at få lavet en ny altan eller et nyt gelænder? Vi kan skabe et skrædersyet design, der er præcis, som du ønsker det, og vi kan hjælpe dig med at få det monteret."
          buttonLabel="Se mere"
        />
      </div>

      <TitleBreak
        title={"Galleri"}
        subtitle={"Se vores arbejde"}
        bgClass={"bg-darker"}
        titleColor={"text-light"}
        subtitleColor={"text-gray-400"}
      />

      <Gallery />
      <div className="py-8"></div>

      <About />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/interiorarbejde"
          element={
            <Layout>
              <Interiørarbejde />
            </Layout>
          }
        />
        <Route
          path="/kontakt"
          element={
            <Layout>
              <Kontakt />
            </Layout>
          }
        />
        <Route
          path="/metal-og-rustfrit"
          element={
            <Layout>
              <MetalOgRustfrit />
            </Layout>
          }
        />
        <Route path="*" element={<Error404 />} />
        <Route
          path="/privatlivspolitik"
          element={
            <Layout>
              <Privatlivspolitik />
            </Layout>
          }
        />
        <Route
          path="/galleri"
          element={
            <Layout>
              <Galleri />
            </Layout>
          }
        />
        <Route
          path="/om-os"
          element={
            <Layout>
              <OmOs />
            </Layout>
          }
        />
        <Route
          path="/gelaendere-og-altaner"
          element={
            <Layout>
              <GelænderOgAltaner />
            </Layout>
          }
        />
        <Route
          path="/montering-af-staalkonstruktioner"
          element={
            <Layout>
              <MonteringAfStaalkonstruktioner />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
