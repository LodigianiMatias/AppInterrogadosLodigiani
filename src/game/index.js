import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoryReducer, numberReducer, playersReducer, questionReducer } from './reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    player: playersReducer,
    number: numberReducer,
    category: categoryReducer,
    questions: questionReducer,
},
);


export default createStore(rootReducer, applyMiddleware(thunk));
