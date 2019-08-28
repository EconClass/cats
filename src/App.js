import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import Copyright from './Copyright';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageHeader />
        <PageContent />
        <Copyright owner="EconClass" />
      </header>
    </div>
  );
}

export default App;
