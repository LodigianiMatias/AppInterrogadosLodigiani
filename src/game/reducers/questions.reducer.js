import { questions } from "../../constants/data";
import { questionsTypes } from "../types";

const { FILTERED_QUESTIONS } = questionsTypes;

const initialState = {
    questions: questions,
    filteredQuestions: [],
}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTERED_QUESTIONS:
            return {
                ...state,
                filteredQuestions: state.questions.filter(
                    (question) => question.categoryId === action.categoryId
                ),
            }
        default:
            return state;   
    }
}

export default questionReducer;