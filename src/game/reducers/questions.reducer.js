import { questions } from "../../constants/data/questions";

const initialState = {
    questions : questions,
    filteredQuestion: [],
    selected: null
}

const questionReducer = (state = initialState, action) => {
    return state;
}

export default questionReducer;