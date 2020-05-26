import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import Searcher from './components/Searcher';

const Footer = React.lazy(() => import('./components/Footer'))
const Carousel = React.lazy(() => import('./components/Carousel'))
const Album = React.lazy(() => import('./components/Album'))
const Container = React.lazy(() => import('./components/Container'))

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
      <Suspense fallback={<div>loading third comp...</div>}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<div>loading fouth comp...</div>}>
        <Album />
      </Suspense>
      <Suspense fallback={<div>loading fifth comp...</div>}>
        <Container />
      </Suspense>
      <Suspense fallback={<div>loading fifth comp...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
