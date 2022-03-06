import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { PAGES } from './Constants/Constants';

const Homepage = lazy(() => import('./Pages/Homepage'));
const AdDetails = lazy(() => import('./Pages/AdDetails'));
const Chat = lazy(() => import('./Pages/Chat'));
const CategoriesList = lazy(() => import('./Pages/CategoriesList'));

export const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Suspense fallback={<Spinner animation="border" />}>
          <Route exact path={PAGES.Home} component={Homepage} />
          <Route exact path={PAGES.AdDetails} component={AdDetails} />
          <Route exact path={PAGES.CategoriesList} component={CategoriesList} />
          <Route exact path={PAGES.Chat} component={Chat} />
        </Suspense>
      </Switch>
    </div>
  </BrowserRouter>
);
