// DEPENDENCIES
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Simulador from '../views/simulador';

const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={Simulador} />
    </Switch>
);

export default AppRoutes;
