import React, {useState, useEffect, useRef} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {Button, TextareaAutosize} from '@material-ui/core';
import StarRating from 'react-star-rating';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import {connect} from 'react-redux';
import {addFeedback} from '../actions/skillAction';

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

  const handleRowData = (item, id) => {
    props.addFeedback(id, item);
  };
  const tableRows = () => {
    if (props.rows[value]) {
      const tableData = props.rows[value].feedback.map((item, idx) => {
        return (
          <tr id="addr0" key={`${value}-${idx}`}>
            <td style={{width: '35%'}}>
              {/* <textarea id="myTextarea">342 Alvin Road Ducksburg</textarea> */}
              <TextareaAutosize
                id={`question-${idx}`}
                style={{width: '95%', height: '50px'}}
                rowsMax={4}
                aria-label="Question"
                placeholder="Enter questions asked"
                name="question"
                //   value={rows[idx].question}
                value={item.question}
                onChange={handleChange(`${value}-${idx}`)}
              />
            </td>
            <td style={{width: '35%'}}>
              <TextareaAutosize
                id={`assessment-${idx}`}
                style={{width: '95%', height: '50px'}}
                rowsMax={4}
                aria-label="Assessment"
                placeholder="Enter assessment"
                name="assessment"
                //   value={rows[idx].assessment}
                value={item.assessment}
                onChange={handleChange(`${value}-${idx}`)}
              />
            </td>
            <td style={{width: '10%'}}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                  id={`rating-${idx}`}
                  name="rating"
                  // value={rows[idx].rating}
                  value={item.rating}
                  onChange={handleChange(`${value}-${idx}`)}
                  //   onChange={(event, newValue) => {
                  //     setValue(newValue);
                  //   }}
                />
              </Box>
            </td>
            <td style={{width: '20%'}}>
              <input
                id={`attachment-${idx}`}
                type="file"
                name="attachment"
                //   value={rows[idx].attachment}
                value={item.attachment}
                onChange={handleChange(`${value}-${idx}`)}
                className="form-control"
              />
            </td>
            <td>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleRowData(item, `${value}-${idx}`)}
              >
                Done
              </Button>
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
