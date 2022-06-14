import * as React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Cards from '../components/cards';
import Button from '@mui/material/Button';
import Masonry from '../components/masonry';
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
      <section className='sec-cards'>
        <h1 className='title'>Nuestros productos</h1>
        <Cards variant='outlined' />
        <div className='btn-center'>
          <Button className='btn-cards'>
            Ver mas productos
          </Button>
        </div>
        
      </section>
      <Masonry />
      <section className='sec-footer'>
        <Footer />
      </section>
    </main>
  </div>
);

export default Home;