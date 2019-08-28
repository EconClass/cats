import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader';
import PageContent from './PageContent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageHeader />
        <PageContent />
      </header>
    </div>
  );
}

export default App;
