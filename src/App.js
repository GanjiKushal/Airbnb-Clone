import React from 'react'
import './App.css';
import Topnav from './components/Header/topnav';
import NewThisWeek_Header from './components/newThisWeek/TopContainer';
import TripMain from './components/Trip/PlanATripMain';
function App() {


  return (
    <div className="App">
      <Topnav />
      <NewThisWeek_Header />
      <TripMain />
    </div>

  );
}

export default App;
