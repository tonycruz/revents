import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import rootReducer from '../reducers/rootReducer'

export const configureStore = (preloadedState) => {
    const middleware = [thunk];
    const middlewareEnhance = applyMiddleware(...middleware);

    const storeEnhances = [middlewareEnhance];

   const composeEnhance = composeWithDevTools(...storeEnhances);

   const store = createStore(
       rootReducer,
       preloadedState,
       composeEnhance
   )
   if (process.env.NODE_ENV !== 'production') {
       if (module.hot) {
           module.hot.accept('../reducers/rootReducer', () => {
               const newReducer = require('../reducers/rootReducer').default;
               store.replaceReducer(newReducer)
           });
       }
   }
   return store;
}