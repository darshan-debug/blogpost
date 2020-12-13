import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';// no need to write './reducers/index.js' as it is index.js ..so no problem

const initialState={};
const middleware=[thunk];

const store=createStore
(   rootReducer,
    initialState,
        compose(
                applyMiddleware(...middleware),
                window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
               )
);
// compose lists the number of functions to be applied on the input(ACTIONS)...in sequence of right to left......output of last func,goes as input to 2nd last func..and so onn

//the 2nd line in compose is to enable the REDUX DEVELOPER tools
console.log('@store',store);
export default store;