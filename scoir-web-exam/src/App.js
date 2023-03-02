import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [dogPhotoUrl, setDogPhotoUrl] = useState('');
  
  function fetchRandom() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogPhotoUrl(data.message))
      .catch(error => console.error(error));
  }

  return (
    <div className="App">
      <header>
        <h1>
        Dog Catcher
        </h1>

        <button onClick={fetchRandom}>Catch a random breed</button>
      </header>
        {dogPhotoUrl ? (
        <img src={dogPhotoUrl} alt="random dog" />
      ) : (
        <p>There are currently no breeds caught. Search above to catch some.</p>
      )}
    </div>
  );
}

export default App;
