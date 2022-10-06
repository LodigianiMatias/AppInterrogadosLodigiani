import { createStore, combineReducers } from 'redux';
import { categoryReducer, questionReducer } from './reducers';

const rootReducer = combineReducers({
    category: categoryReducer,
    questions: questionReducer,
});

export default createStore(rootReducer);