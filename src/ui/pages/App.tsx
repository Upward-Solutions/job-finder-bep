import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles'

function App() {
  return (
    <Banner>
      <Title>Bienestar Estudiantil - Psicología UBA</Title>
      <Login>Iniciar Sesión</Login>
    </Banner>
  );
}

const Banner = styled.div`
  display: flex;
  position: sticky;
  background-color: ${styles.colors.primary};
  padding: 0.25em 1em;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: 0px 3px 8px 0px #454545bf;
`;

const Title = styled.h1`
  color: ${styles.colors.white};
  font-size: x-large;
  font-weight: 500;
`;

const Login = styled.button`
  border-radius: 20px;
  padding: 10px;
  border: none;
  height: fit-content;
  align-self: center;
  color: ${styles.colors.white};
  background-color: ${styles.colors.alternative};
`;

export default App;
