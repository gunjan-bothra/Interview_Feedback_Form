import { ADD_FEEDBACK, INITIAL_SETUP, ROW_ITEM, DELETE_ROW, SAVE_FEEDBACK } from '../Constants/ActionConstant';

export const initialSetup = (data) => ({
    type: INITIAL_SETUP,
    payload: data
});
export const addFeedback = (idx, data) => ({
    type: ADD_FEEDBACK,
    payload: {
        data,
        idx
    }
}
);

export const handleRowItem = (idx) => ({
    type: ROW_ITEM,
    payload: idx
});

export const deleteRow = (id) => ({
    type: DELETE_ROW,
    payload: id 
});

export const saveFeedback = (data) => ({
    type: SAVE_FEEDBACK,
    payload: data
});