// import React, {useState, useEffect, useRef} from 'react';
// import TextArea from './TextAreaAutoSize';
// import StarRating from 'react-star-rating';
// import Rater from 'react-rater';
// import 'react-rater/lib/react-rater.css';
// import {connect} from 'react-redux';
// import {addFeedback} from '../actions/skillAction';
// import CandidateRating from './Rating';
// import UIButton from './Button';
// import Input from './input';

// const InputTable = (props) => {
//     const {value} = props;
//     const tableRows = () => {
//     if (props.rows && props.rows[value]) {
//       const tableData = props.rows[value].feedback.map((item, idx) => {
//         return (
//           <tr id="addr0" key={`${value}-${idx}`}>
//             <td style={{width: '35%'}}>
//               <TextArea value={value} item={item} idx={idx}></TextArea>
//             </td>
//             <td style={{width: '35%'}}>
//               <TextArea value={value} item={item} idx={idx}></TextArea>
//             </td>
//             <td style={{width: '10%'}}>
//               <CandidateRating value={value} item={item} idx={idx}></CandidateRating>
//             </td>
//             <td style={{width: '20%'}}>
//                 <Input value={value} item={item} idx={idx}></Input>
//             </td>
//             <td>
//               <UIButton value={value} item={item} idx={idx}></UIButton>
//             </td>
//           </tr>
//         );
//       });
//       return tableData;
//     }
//   };
//     const handleAddRow = (value) => {
//     // props.handleAddRow(value);
//   };

//   const handleRemoveRow = () => {
//     // setRows(rows.slice(0, -1));
//   };

    
//     return (
//         <div>
//         <div className="container">
//             <div className="row clearfix">
//             <div className="col-md-12 column">
//                 <table className="table table-bordered table-hover" id="tab_logic">
//                 <thead>
//                     <tr>
//                     <th className="text-center"> Question </th>
//                     <th className="text-center"> Assessment </th>
//                     <th className="text-center"> Rating </th>
//                     <th className="text-center"> Attachment </th>
//                     <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>{tableRows()}</tbody>
//                 </table>
//                 <UIButton
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleAddRow(value)}
//                 >
//                 Add
//                 </UIButton>
//                 <UIButton
//                 variant="contained"
//                 color="primary"
//                 onClick={handleRemoveRow}
//                 >
//                 Delete Row
//                 </UIButton>
//             </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// const mapStateToProps = (state) => {
//   return {
//     feedback: state.skillReducer.feedback,
//     rows: state.skillReducer.rows,
//   };
// };

// export default connect(mapStateToProps, {addFeedback})(InputTable);

// import React, {useState, useEffect, useRef} from 'react';
// import TextArea from './TextAreaAutoSize';
// import StarRating from 'react-star-rating';
// import Rater from 'react-rater';
// import 'react-rater/lib/react-rater.css';
// import {connect} from 'react-redux';
// import {addFeedback} from '../actions/skillAction';
// import CandidateRating from './Rating';
// import UIButton from './Button';
// import Input from './input';

// const row = {
//   question: '',
//   assessment: '',
//   rating: '',
//   attachment: '',
// };

// const oSkills = {
//   feedback: [],
//   checkbox: [],
// };
// const InputTable = (props) => {
//   const [rows, setRows] = useState([
//     {
//       question: '',
//       assessment: '',
//       rating: '',
//       attachment: '',
//     },
//   ]);
//   const [skills, setSkills] = useState({});

//   const handleChange = (idx) => (e) => {
//     const {name, value} = e.target;
//     const item = [...props.rows];
//     const split = idx.split('-');
//     item[split[1].trim()][name] = value;
//     // let aSkills = {...skills};
//     // if (!aSkills[split[0]]) {
//     //   aSkills[split[0]] = {...oSkills};
//     // }
//     // aSkills[split[0]].feedback = item;
//     // setSkills(aSkills);
//     // props.handleChange(split[0], aSkills);
//     setRows(item);
//   };

//   const handleAddRow = (value) => {
//     props.handleAddRow(value);
//   };

//   const handleRemoveRow = () => {
//     setRows(rows.slice(0, -1));
//   };

//   const handleRowData = (item, id) => {
//     props.addFeedback(id, item);
//   };
//   const tableRows = () => {
//     if (props.rows[value]) {
//       const tableData = props.rows[value].feedback.map((item, idx) => {
//         return (
//           <tr id="addr0" key={`${value}-${idx}`}>
//             <td style={{width: '35%'}}>
//               {/* <textarea id="myTextarea">342 Alvin Road Ducksburg</textarea> */}
//               {/* <TextareaAutosize
//                 id={`question-${idx}`}
//                 style={{width: '95%', height: '50px'}}
//                 rowsMax={4}
//                 aria-label="Question"
//                 placeholder="Enter questions asked"
//                 name="question"
//                 //   value={rows[idx].question}
//                 value={item.question}
//                 onChange={handleChange(`${value}-${idx}`)}
//               /> */}
//               <TextArea value={value} item={item} idx={idx}></TextArea>
//             </td>
//             <td style={{width: '35%'}}>
//               {/* <TextareaAutosize
//                 id={`assessment-${idx}`}
//                 style={{width: '95%', height: '50px'}}
//                 rowsMax={4}
//                 aria-label="Assessment"
//                 placeholder="Enter assessment"
//                 name="assessment"
//                 //   value={rows[idx].assessment}
//                 value={item.assessment}
//                 onChange={handleChange(`${value}-${idx}`)}
//               /> */}
//               <TextArea value={value} item={item} idx={idx}></TextArea>
//             </td>
//             <td style={{width: '10%'}}>
//               <CandidateRating value={value} item={item} idx={idx}></CandidateRating>
//             </td>
//             <td style={{width: '20%'}}>
//                 <Input value={value} item={item} idx={idx}></Input>
//             </td>
//             <td>
//               {/* <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleRowData(item, `${value}-${idx}`)}
//               >
//                 Done
//               </Button> */}
//               <UIButton value={value} item={item} idx={idx}></UIButton>
//             </td>
//           </tr>
//         );
//       });

//       return tableData;
//     }
//   };
//   const {value} = props;
//   return (
//     <div>
//       <div className="container">
//         <div className="row clearfix">
//           <div className="col-md-12 column">
//             <table className="table table-bordered table-hover" id="tab_logic">
//               <thead>
//                 <tr>
//                   <th className="text-center"> Question </th>
//                   <th className="text-center"> Assessment </th>
//                   <th className="text-center"> Rating </th>
//                   <th className="text-center"> Attachment </th>
//                 </tr>
//               </thead>
//               <tbody>{tableRows()}</tbody>
//             </table>
//             <UIButton
//               variant="contained"
//               color="primary"
//               onClick={() => handleAddRow(value)}
//             >
//               Add
//             </UIButton>
//             <UIButton
//               variant="contained"
//               color="primary"
//               onClick={handleRemoveRow}
//             >
//               Delete Row
//             </UIButton>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     feedback: state.skillReducer.feedback,
//     rows: state.skillReducer.rows,
//   };
// };
// export default connect(mapStateToProps, {addFeedback})(InputTable);

import React, {useState, useEffect, useRef} from 'react';
import {Button} from '@material-ui/core';
import 'react-rater/lib/react-rater.css';
import {connect} from 'react-redux';
import {addFeedback} from '../actions/skillAction';
import TextArea from './TextAreaAutoSize';
import CandidateRating from './Rating';
import UIButton from './Button';
import Input from './input';

const row = {
  question: '',
  assessment: '',
  rating: '',
  attachment: '',
};

const oSkills = {
  feedback: [],
  checkbox: [],
};
const InputTable = (props) => {
  const [rows, setRows] = useState([
    {
      question: '',
      assessment: '',
      rating: '',
      attachment: '',
    },
  ]);
  const [skills, setSkills] = useState({});

  const handleChange = (idx) => (e) => {
    const {name, value} = e.target;
    const item = [...props.rows];
    const split = idx.split('-');
    item[split[1].trim()][name] = value;
    // let aSkills = {...skills};
    // if (!aSkills[split[0]]) {
    //   aSkills[split[0]] = {...oSkills};
    // }
    // aSkills[split[0]].feedback = item;
    // setSkills(aSkills);
    // props.handleChange(split[0], aSkills);
    setRows(item);
  };

  const handleAddRow = (value) => {
    props.handleAddRow(value);
  };

  const handleRemoveRow = () => {
    setRows(rows.slice(0, -1));
  };

//   const handleRowData = (item, id) => {
//     props.addFeedback(id, item);
//   };
  const tableRows = () => {
    if (props.rows[value]) {
      const tableData = props.rows[value].feedback.map((item, idx) => {
        return (
            <tr id="addr0" key={`${value}-${idx}`}>
            <td style={{width: '35%'}}>
              <TextArea value={value} item={item} idx={idx} name="question"></TextArea>
            </td>
            <td style={{width: '35%'}}>
              <TextArea value={value} item={item} idx={idx} name="assessment"></TextArea>
            </td>
            <td style={{width: '10%'}}>
              <CandidateRating value={value} item={item} idx={idx}></CandidateRating>
            </td>
            <td style={{width: '20%'}}>
                <Input value={value} item={item} idx={idx}></Input>
            </td>
            <td>
              <UIButton value={value} item={item} idx={idx}></UIButton>
            </td>
          </tr>
        );
      });

      return tableData;
    }
  };
  const {value} = props;
  return (
    <div>
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table className="table table-bordered table-hover" id="tab_logic">
              <thead>
                <tr>
                  <th className="text-center"> Question </th>
                  <th className="text-center"> Assessment </th>
                  <th className="text-center"> Rating </th>
                  <th className="text-center"> Attachment </th>
                </tr>
              </thead>
              <tbody>{tableRows()}</tbody>
            </table>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddRow(value)}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRemoveRow}
            >
              Delete Row
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    feedback: state.skillReducer.feedback,
    rows: state.skillReducer.rows,
  };
};
export default connect(mapStateToProps, {addFeedback})(InputTable);

