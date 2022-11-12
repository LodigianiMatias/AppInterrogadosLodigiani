import Record from "../model/Record"
import { createSlice } from "@reduxjs/toolkit";
import {insertRecord} from '../db/index';

const initialState = {
    records: [],
};

const recordSlice = createSlice ({
    name: "record",
    initialState,
    reducers: {
        addRecord: (state, action) => {
            const newRecord = new Record(
                action.payload.id,
                action.payload.title,
                action.payload.image,
              );
              state.records.push(newRecord);
        },
        setRecords: (state, action) => {
            state.records = action.payload;
        },
    },
});

export const {addRecord, setRecords} = recordSlice.actions;

export const saveRecord = (title, image) => {
    return async (dispatch) => {
      try {
        const result = insertRecord(title, image)
        dispatch(addRecord({ id: result.insertId, title, image}))
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
  };

export default recordSlice.reducer;