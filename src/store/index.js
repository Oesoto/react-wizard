// DEPENDENCIES
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//Redux-Thunk - Permitirá hacer llamadas asincronas con Redux
import thunk from 'redux-thunk';

import { wizardReducer } from '../reducers';
// import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    // form: reduxFormReducer, // mounted under "form",
    wizard: wizardReducer
});

//Permite integrar la aplicación al add-on de Redux Dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Se crea un store con el reducer importado y los middlewares que se quieran agregar
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
