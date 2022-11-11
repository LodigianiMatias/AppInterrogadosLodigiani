import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoryReducer, questionReducer } from './reducers';

import recordSlice from './record.slice';

const rootReducer = combineReducers({
    record: recordSlice,
    category: categoryReducer,
    questions: questionReducer,
},
);


export default createStore(rootReducer);