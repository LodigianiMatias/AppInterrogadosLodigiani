import { createStore, combineReducers } from 'redux';
import { categoryReducer, questionReducer } from './reducers';

const rootReducer = combineReducers({
    questions: questionReducer,
    category: categoryReducer
});

export default createStore(rootReducer);