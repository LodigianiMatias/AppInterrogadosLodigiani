import { GameRecord } from "../types";
import { PlayerTypes } from "../types";
import { insertRecord } from "../../db";

const { SAVE_RECORD } = PlayerTypes
const { INCREMENT } = GameRecord

export const saveRecord = (name, image) => {
    return async (dispatch) => {
        try {
            const puntos = 0;
            const result = await insertRecord(name, image);
            dispatch({
                type: SAVE_RECORD,
                nombre: name,
                image: image,
            });
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const Incrementar = () => ({
    type: INCREMENT,
})