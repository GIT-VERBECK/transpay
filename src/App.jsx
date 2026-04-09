import React from 'react';
import MainLayout from './layouts/MainLayout';
import Loader from './componements/Loader';
import Header from './componements/Header';
import Login from './pages/Login';

function App() {
  return (
    <MainLayout>
      <Login /> 
    </MainLayout>
  );
}

export default App;
