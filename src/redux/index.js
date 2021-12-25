import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './reducers/todoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './reducers/usersReducer';
import countReducer from './reducers/countReducer';
import thunk from 'redux-thunk';

const redusers = combineReducers({
    todo: todoReducer,
    users: usersReducer,
    count: countReducer
});

const store = createStore(redusers, composeWithDevTools(applyMiddleware(thunk)));

export default store;