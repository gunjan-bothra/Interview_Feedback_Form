import React, {useState, useEffect, useRef} from 'react';
import {Button} from '@material-ui/core';
import 'react-rater/lib/react-rater.css';
import {connect} from 'react-redux';
import {addFeedback, deleteRow} from '../actions/skillAction';
import TableRow from './TableRow';
// import { DeleteForeverIcon, AddCircleIcon} from '@material-ui/icons';
import DeleteForever from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';

const row = {
    question: '',
    assessment: '',
    rating: '',
    attachment: '',
  };
  
  const oSkills = {
    feedback: []
    // checkbox: [],
  };

const TableContent = (props) => {
    const [rows, setRows] = useState([{...row},]);
    const [rowCount, setRowCount]  = useState(1);
    const [clearFirstRow, setClearFirstRow] = useState({
        skillID:'',
        isClear: false
    })
    const {value} = props;

    const handleDelete = (skillID) => {
        // let updatedRows = rows.filter((item, index) => {
        //             return index !== delIndex;
        //         });
        //         setRows(updatedRows);
        if (rows.length > 1) {
            setRows(rows.slice(0, -1));
        } else {
            setRows([{...rows}]);
            setClearFirstRow({
                skillID:skillID,
                isClear:true
            })
        }
        props.deleteRow(skillID);
    }
    const renderRow = () => {
        const renderer = rows.map((item, index) => {
            return <TableRow skillID={value} index={index} handleDelete={handleDelete} clearFirstRow={clearFirstRow}></TableRow>
        });
        return renderer;
    }

    const handleAddRow = (skillID) => {
        let newRow = [...rows];
        newRow.push({...row});
        setRows(newRow);
    }
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
                <tbody>
                    {renderRow()}
                </tbody>
              </table>
              <div align="right">
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAddRow(value)}
              >
                <AddIcon></AddIcon>
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleDelete(value)
                }
              >
                <DeleteForever></DeleteForever>
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
      feedback: state.skillReducer.feedback,
      rows: state.skillReducer.rows,
      feedbackList: state.skillReducer.feedbackList
    };
  };
  export default connect(mapStateToProps, {addFeedback, deleteRow})(TableContent);