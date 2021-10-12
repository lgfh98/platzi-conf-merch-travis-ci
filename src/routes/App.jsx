import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import Layout from '../components/Layout';

import AppContext from '../context/AppContext';

import useInitialState from '../hooks/useInitialState';

import '../styles/components/App.css';

const App = () => {
  const initialState = useInitialState();

  // if (initialState.loading) {
  //   return <h1>Cargando...</h1>;
  // }

  return (
    <AppContext.Provider value={initialState}>
      <HashRouter basename="/platzi-conf-merch-travis-ci">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </HashRouter>
    </AppContext.Provider>
  );
};
export default App;
