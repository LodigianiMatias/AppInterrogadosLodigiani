import { GameRecord } from "../types";

const { INCREMENT, LOST } = GameRecord

// export const saveRecord = (name, image) => {
//     return async (dispatch) => {
//         try {
//             const puntos = 0;
//             const result = await insertRecord(name, image);
//             dispatch({
//                 type: SAVE_RECORD,
//                 nombre: name,
//                 image: image,
//             });
//         } catch (err) {
//             console.log(err);
//             throw err;
//         }
//     }
// }

export const Incrementar = () => ({
    type: INCREMENT,
})

export const Perder = () => ({
    type: LOST,
})