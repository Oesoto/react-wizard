import React from 'react';
import ReactDOM from 'react-dom';
import Wizard from './Wizard';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//Redux-Thunk - Permitirá hacer llamadas asincronas con Redux
import thunk from 'redux-thunk';

//Importar cada uno de los reducers
import wizardReducer from './reducers/reducer_wizard';

//La función combineReducers recibe un objeto con cada uno de los reducers
//para crear un único reducer
const rootReducer = combineReducers({
    wizard: wizardReducer
});

//Permite integrar la aplicación al add-on de Redux Dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Se crea un store con el reducer importado y los middlewares que se quieran agregar
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

//El componente Provider permite inyectar el store en la aplicación como prop
ReactDOM.render(
    <Provider store={store}>
        <Wizard />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
