import { ADD_FEEDBACK } from '../Constants/ActionConstant';
const initialState = {
    rows: {
        question: '',
      assessment: '',
      rating: '',
      attachment: ''
    },
    // rows: {},
    checkbox: [],
    feedback: [],
    skillsList: {}
};

const skillReducer =  (state = initialState, action) => {
    switch (action.type) {
    case 'INITIAL_SETUP':
        const skills =action.payload;
        let list = {};
        const skillList = skills.map(skill => {
            return list[skill.value] = {
                feedback: [{...state.rows}]
            }
        })
        return { ...state, rows: skillList };
     case 'ADD_FEEDBACK':
        const splitID = action.payload.id.split('-');
        // if (state.rows[splitID[0]]) {
           let item =  {...state.rows[splitID[0]]};
        //    if (item.feedback.length === 1) {
        //     ifitem.feedback
        //    }
        // }
        return {feedback: action.payload}
     default:
      return state;
    }
   }

export default skillReducer;