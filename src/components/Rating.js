import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { addFeedback } from '../actions/skillAction';
import {connect} from 'react-redux';

const CandidateRating = (props) => {
  const [rateValue, setRateValue] = useState('');
    const {rowIndex, skillID, name} = props;
    const handleChange = (event, id) => {
      const {name, value} = event.target;
      setRateValue(value);
        props.addFeedback(id, [name, value]);
    }
    return (
        <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                  id={`rating-${rowIndex}`}
                  name="rating"
                  value={rateValue}
                  // onChange={(event) => handleChange(event,`${skillID}-${rowIndex}`)}
                    onChange={(event, newValue) => {
                      setRateValue(newValue);
                      props.addFeedback(`${skillID}-${rowIndex}`, ["rating",newValue]);
                    }}
                />
              </Box>
        // <input id={`rating-${rowIndex}`}>
        // </input>
    );
}

// export default CandidateRating;
export default connect(null, {addFeedback})(CandidateRating);