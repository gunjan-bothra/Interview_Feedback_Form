import React, {useState} from 'react';
import { addFeedback } from '../actions/skillAction';
import {connect} from 'react-redux';

const Input = (props) => {
    const [value, setValue] = useState('');
    const {rowIndex, skillID} = props;

    const handleChange = (event, id) => {
        const {name, value} = event.target;
        setValue(value);
        props.addFeedback(id, [name, value]);
    }

    return (
        <input
                id={`attachment-${rowIndex}`}
                type="file"
                name="attachment"
                value={value}
                onChange={(event) => handleChange(event,`${skillID}-${rowIndex}`)}
                className="form-control"
              />
    )
}

export default connect(null, {addFeedback})(Input);
