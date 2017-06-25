import React from "react";
//Logger
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import {render} from "react-dom";
import {combineReducers} from 'redux';
import {TodoContainer} from './tocontainer';
import ReducersTodos from './todos_reducer';

const allReducers = combineReducers({
    todos: ReducersTodos
});


const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

class App extends React.Component {
    render() {
        return (
              <div>
                <TodoContainer />
              </div>
        );
    }
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('app'));
