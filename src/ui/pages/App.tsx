import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles'
import { Banner } from './Home/Banner';
import { Footer } from './Home/Footer';
import { Jobs } from './Home/Jobs';

function App() {
  return (
    <>
      <Banner />
      <Jobs />
      <Footer />
    </>
  );
}


export default App;
