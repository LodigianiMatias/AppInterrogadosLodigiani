import { questionsTypes } from "../types";

const {FILTERED_QUESTIONS} = questionsTypes;

export const filteredQuestions = (id) => ({
    type: FILTERED_QUESTIONS,
    categoryId: id
})