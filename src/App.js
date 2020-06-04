import React from 'react';

// component imports
import SearchForm from './components/SearchForm'
import NavButtons from './components/NavButtons'
import PhotoList from './components/PhotoList'

import './App.css';

function App() {
  return (
    <div className="container">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}

      <SearchForm />

      <NavButtons />

      <PhotoList />


    </div>
  );
}

export default App;
