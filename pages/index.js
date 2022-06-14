import * as React from "react";
import Button from "@mui/material/Button";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Cards from "../components/cards";
import Masonry from "../components/masonry";
import Contacto from "../components/contact";
import Footer from "../components/footer";

const Home = () => (
  <div>
    
    <Navbar />

    <Hero />

    <h1 className="title">Nuestros productos</h1>
    <Cards variant="outlined" />
    <div className="btn-center">
      <Button variant="outlined">Ver mas productos</Button>
    </div>

    <Masonry />

    <Contacto />

    <Footer />
  </div>
);

export default Home;
