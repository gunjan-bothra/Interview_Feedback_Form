import { ADD_FEEDBACK, INITIAL_SETUP } from '../Constants/ActionConstant';

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

