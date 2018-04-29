import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Layout from './components/Layout/Layout'
import AutomaticPlantWateringSystem from './pages/AutomaticPlantWateringSystem/AutomaticPlantWateringSystem';

const App = props => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/automatic-plant-watering-system" exact component={AutomaticPlantWateringSystem} />
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
