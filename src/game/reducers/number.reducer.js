import { GameRecord } from "../types";

const { INCREMENT, LOST } = GameRecord
const initialState = {
    numero: 0,
}

const numberReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                numero: state.numero +1,
            }

        case LOST:
            return {
                numero: 0,
            }
        default:
            return state;
    }
};

export default numberReducer;
