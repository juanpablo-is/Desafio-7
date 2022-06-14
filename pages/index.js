import React from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Cards from '../components/cards';
import Footer from '../components/footer';


const Home = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <section className='hero'>
        <Hero />
      </section>
      <section className='cards'>
        <h1 className='title'>Nuestros productos</h1>
        <Cards variant="outlined" />
        <div className='btn-center'>
          <Button variant="contained" className='btn-cards'>Ver mas productos</Button>
        </div>
      </section>
      <section className='footer'>
        <Footer />
      </section>
    </main>
  </div>
)

export default Home