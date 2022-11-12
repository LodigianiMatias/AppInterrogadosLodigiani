import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoryReducer, numberReducer, questionReducer } from './reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    number: numberReducer,
    category: categoryReducer,
    questions: questionReducer,
},
);


export default createStore(rootReducer, applyMiddleware(thunk));