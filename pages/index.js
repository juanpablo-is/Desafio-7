import * as React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import Cards from './cards';
import Button from '@mui/material/Button'

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


    </main>
  </div>
)

export default Home