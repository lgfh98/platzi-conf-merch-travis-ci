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
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path="/platzi-conf-merch-travis-ci" component={Home} />
            <Route
              exact
              path="/platzi-conf-merch-travis-ci/checkout"
              component={Checkout}
            />
            <Route
              exact
              path="/platzi-conf-merch-travis-ci/checkout/information"
              component={Information}
            />
            <Route
              exact
              path="/platzi-conf-merch-travis-ci/checkout/payment"
              component={Payment}
            />
            <Route
              exact
              path="/platzi-conf-merch-travis-ci/checkout/success"
              component={Success}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </HashRouter>
    </AppContext.Provider>
  );
};
export default App;
