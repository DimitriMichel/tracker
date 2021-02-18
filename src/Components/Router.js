import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './Front Page/FrontPage';
import StockPage from './StockPage/StockPage';
import NotFound from './NotFound';

const Router = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/stock" component={StockPage} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
};

export default Router;
