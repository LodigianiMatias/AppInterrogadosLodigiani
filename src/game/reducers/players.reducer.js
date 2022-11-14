import { PlayerTypes } from "../types";

const { SAVE_RECORD, LOAD_PLAYERS } = PlayerTypes

const initialState = {
    players: [],
}

const playersReducer = (state= initialState, action) => {
    switch(action.type) {
        case SAVE_RECORD:
            return {
                ...state,
                players: [...state.players,{id:Date.now(), title:action.title, image:action.image}]
            }
        case LOAD_PLAYERS:
            return {
                ...state,
                players: action.players
            }
        default:
            return state
    }
}

export default playersReducer;