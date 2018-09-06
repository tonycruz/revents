import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import thunk from "redux-thunk";
import rootReducer from '../reducers/rootReducer'
import firebase from '../config/firebase';

const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true
};

export const configureStore = (preloadedState) => {
    const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhances = [middlewareEnhancer];

   const composeEnhance = composeWithDevTools(
       ...storeEnhances,
       reactReduxFirebase(firebase, rrfConfig),
       reduxFirestore(firebase));

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