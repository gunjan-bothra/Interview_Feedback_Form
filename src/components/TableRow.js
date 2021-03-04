import React, {useState} from 'react';
import TextArea from './TextAreaAutoSize';
import UIButton from './Button';
import Input from './input';
import CandidateRating from './Rating';
import {Button} from '@material-ui/core';

const TableRow = (props) => {
    const {skillID, index, item} = props;
    return (
          <tr id="addr0" key={`${skillID}-${index}`}>
            <td style={{width: '35%'}}>
              <TextArea skillID={skillID} rowIndex={index} name="question" clearFirstRow={props.clearFirstRow}></TextArea>
            </td>
            <td style={{width: '35%'}}>
              <TextArea skillID={skillID} rowIndex={index} name="assessment" clearFirstRow={props.clearFirstRow}></TextArea>
            </td>
            <td style={{width: '10%'}}>
              <CandidateRating skillID={skillID} rowIndex={index} clearFirstRow={props.clearFirstRow}></CandidateRating>
            </td>
            <td style={{width: '20%'}}>
                <Input skillID={skillID} rowIndex={index} clearFirstRow={props.clearFirstRow}></Input>
            </td>
            {/* <td>
              <UIButton skillID={skillID} item={item} rowIndex={index}></UIButton>
            </td> */}
            {/* <td>
              <Button skillID={skillID} rowIndex={index} onClick={() => props.handleDelete(skillID,index)}>Delete</Button>
            </td> */}
          </tr>
    )
}

export default TableRow;