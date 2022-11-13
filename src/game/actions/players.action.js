import * as FileSystem from "expo-file-system";

import { GameRecord, PlayerTypes } from "../types";
import { getRecords, insertRecord } from "../../db";

const { SAVE_RECORD, LOAD_PLAYERS } = PlayerTypes;
const { INCREMENT, LOST } = GameRecord;

export const saveRecord = (title, image) => {
  return async (dispatch) => {
    try {
      const result = await insertRecord(title, image);
    } 
    catch (err) {
      console.log(err);
      throw err;
    }
    dispatch({
        type: SAVE_RECORD,
        title: title,
        image: image,
    })
  };
};

export const LoadPlayer = () => {
  return async (dispatch) => {
    try {
      const result = await getRecords();
      const array = result?.rows?._array;
      dispatch({
        type: LOAD_PLAYERS,
        players: array,
      });
    } catch (err) {
      throw err;
    }
  }; 
};

export const Incrementar = () => ({
  type: INCREMENT,
});

export const Perder = () => ({
  type: LOST,
});
