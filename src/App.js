import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import './App.css';
import CarDetail from './components/CarDetail';
import Cars from './components/Cars';
import Companies from './components/Companies';
import CompanyDetail from './components/CompanyDetail';
import Navi from './components/Navi';
import TopCars from './components/TopCars';


function App() {
  return (
    <div>
      <Navi />
      <Route exact path="/" component={Cars} />
      <Route exact path="/companies" component={Companies} />
      <Route exact path="/cardetail/:id" component={CarDetail} />
      <Route exact path="/topcars" component={TopCars} />
      <Route exact path="/companydetail/:id" component={CompanyDetail} />
    </div>
  );
}

export default App;
