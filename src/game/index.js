import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoryReducer, numberReducer, questionReducer } from './reducers';

import recordSlice from './record.slice';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    record: recordSlice,
    number: numberReducer,
    category: categoryReducer,
    questions: questionReducer,
},
);


export default createStore(rootReducer, applyMiddleware(thunk));