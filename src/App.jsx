import React from 'react';
import Loader from './componements/Loader';

function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <section style={{margin:'25vh 0'}}> 
        <Loader 
          message="Chargement du trajet..." 
          subMessage="Connexion aux services de trajets" 
        />
      </section>
      <div style={{ height: '80px' }}></div>
    </div>
  );
}

export default App;
