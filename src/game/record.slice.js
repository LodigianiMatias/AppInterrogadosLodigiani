import Record from "../model/Record"
import { createSlice } from "@reduxjs/toolkit";

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
                action.payload.name,
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

export default recordSlice.reducer;