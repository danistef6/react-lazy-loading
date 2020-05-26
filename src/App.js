import React from 'react';
import './App.css';
import Header from './components/Header';
import Searcher from './components/Searcher';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Album from './components/Album';
import Container from './components/Container';

const sections = [
  { title: 'Vuelos', url: '#' },
  { title: 'Alquiler de Autos', url: '#' },
  { title: 'Hoteles', url: '#' },
  { title: 'Eventos y actividades', url: '#' },
  { title: 'Alianzas y beneficios', url: '#' },
  { title: 'Nuestra red de servicios', url: '#' },
  { title: 'Sobre nosotros', url: '#' },
  { title: 'Contáctanos', url: '#' },
];

function App() {
  return (
    <div className="App">
      <Header title="Viajes" sections={sections} />
      <Searcher/>
      <Carousel/>
      <Album/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
