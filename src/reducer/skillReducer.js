import {
  ADD_FEEDBACK,
  INITIAL_SETUP,
  ROW_ITEM,
  DELETE_ROW,
  SAVE_FEEDBACK
} from '../Constants/ActionConstant';
const initialState = {
  rows: {
    question: '',
    assessment: '',
    rating: '',
    attachment: '',
  },
  row: {
    question: '',
    assessment: '',
    rating: '',
    attachment: '',
  },
  checkbox: [],
  feedback: [],
  skillsList: {},
  feedbackList: {},
  overAllFeedbackSkills:{}
};

const skillReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_SETUP':
      const skills = action.payload;
      let list = {};
      const skillList = skills.map((skill) => {
        return (list[skill.value] = {
          feedback: [{...state.rows}],
        });
      });
      return {...state, rows: skillList};
    case 'ADD_FEEDBACK':
      const splitID = action.payload.idx.split('-');
      let aList = {...state.feedbackList};
      let name = action.payload.data[0];
      let value = action.payload.data[1];
      let obj = {};
      obj[name] = value;
      if (!state.feedbackList || !state.feedbackList[splitID[0]]) {
        aList[splitID[0]] = {
          feedback: [{...state.row, ...obj}],
        };
      } else {
        aList[splitID[0]].feedback[splitID[1]] = {
          ...aList[splitID[0]].feedback[splitID[1]],
          ...obj,
        };
      }
      return {...state, feedbackList: aList};
    case 'ROW_ITEM':
      let aID = action.payload.split('-');
      let row = state.feedbackList[aID[0]];
      break;
    case 'DELETE_ROW':
        let aFeedbackList = {...state.feedbackList};
        aFeedbackList = aFeedbackList[action.payload] && aFeedbackList[action.payload].feedback && aFeedbackList[action.payload].feedback.slice(0, -1);
        return {...state, feedbackList: aFeedbackList};
    case 'SAVE_FEEDBACK':
        let checkboxData = action.payload;
        let feedBackData = {...state.feedbackList};
        let overAllFeedbackSkills = {
          checkbox:checkboxData,
          feedback:feedBackData
        }
        return {...state, overAllFeedbackSkills };
    default:
      return state;
  }
};

export default skillReducer;
