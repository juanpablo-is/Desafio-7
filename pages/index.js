import * as React from "react";
import Button from "@mui/material/Button";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Cards from "../components/cards";
import Masonry from "../components/masonry";
import Contacto from "../components/contact";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

const Home = () => (
  <div>
    <Navigation />

    <Hero />

    <section className="sec-cards" id="cards">
      <h1 className="title">Nuestros productos</h1>
      <Cards variant="outlined" />
    </section>

    <Masonry />

    <Contacto />

    <Footer />
  </div>
);

export default Home;
