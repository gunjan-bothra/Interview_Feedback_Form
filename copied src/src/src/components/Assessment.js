import React, {useState} from 'react';
import {Grid, TextField} from '@material-ui/core';

const Assessment = (props) => {
  const [InputArray, setInputArray] = useState([]);

  const updateInputArray = () => {
    let arr = [...InputArray];
    arr.push(
      <div>
        <TextField></TextField>
      </div>
    );
    return arr;
  };
return (
  <>
  {/* {updateInputArray()} */}
  <div>
        <TextField></TextField>
      </div>
  </>
);
};

export default Assessment;