import { GameRecord } from "../types";

const { INCREMENT } = GameRecord
const initialState = {
    numero: 0,
}

const numberReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return state.numero +1 ;
            default:
                return state;
    }
};

export default numberReducer;