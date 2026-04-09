import React from 'react';
import MainLayout from './layouts/MainLayout';
import Loader from './componements/Loader';
import Header from './componements/Header';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <MainLayout>
      <Register /> 
    </MainLayout>
  );
}

export default App;
