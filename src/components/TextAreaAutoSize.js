import React, {useState, useEffect} from 'react';
import {TextareaAutosize} from '@material-ui/core';
import { addFeedback } from '../actions/skillAction';
import {connect} from 'react-redux';

const TextArea = (props) => {
    const [text, setText] = useState('');

    useEffect(() =>{
        setText('');
    },[props.clearFirstRow]);

    const {rowIndex, skillID, name} = props;
    const handleChange = (event, id) => {
        const {name, value} = event.target;
        setText(value);
        props.addFeedback(id, [name, value]);
    }

    
    return (
        <TextareaAutosize
                id={`${name}-${rowIndex}`}
                style={{width: '95%', height: '50px'}}
                rowsMax={4}
                aria-label="Question"
                placeholder="Enter questions asked"
                name={name}
                value={text}
                onChange={(event) => handleChange(event,`${skillID}-${rowIndex}`)}
              />
    )
}

export default connect(null, {addFeedback})(TextArea);