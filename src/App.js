import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Layout from './components/Layout/Layout'

const App = props => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
