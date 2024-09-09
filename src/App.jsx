import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Admin from './components/admin';
import './App.css'
const App = () => {
  return (
    <Container>
      <h1 className='text-center'>Administrador de pacientes</h1>
      <Admin></Admin>
    </Container>
  );
};

export default App;