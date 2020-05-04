import React from 'react';

import {Grid, TextField} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/styles/withStyles';
// import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Select from 'react-select';
import {Experience, Level, Position, Mode} from '../Constants/HeaderConstant';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';

var styles = (theme) => ({
    root: {
        marginTop: '7px',
        marginBottom: '5px',
        // '& .MuiButtonBase-root.MuiIconButton-root': {
        //     marginRight: '-15px'
        // },
        // '& .MuiOutlinedInput-notchedOutline': {
        //     borderColor: theme.light.buttonBorder + theme.important
        // },
        // '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        //     borderColor: theme.light.accent.primary + theme.important
        // },
        // '& .MuiInputAdornment-root button': {
        //     color: theme.light.text.primary + theme.important
        // },
        // '&:hover .MuiOutlinedInput-notchedOutline': {
        //     borderColor: theme.light.text.primary + theme.important
        // },
       
    }
});

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'},
];
const FormHeader = (props) => {
  const {classes} = props;
  return (
    <div>
      <Grid container>
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <label>Candidate Name</label>
            <TextField
              //   label="Candidate Name"
              style={{margin: 8}}
              placeholder="Enter candidate name"
              margin="normal"
              variant="outlined"
              size="small"
              // value={signInData.email}
              required
              // helperText={signInData.helperText['email']}
              // onChange={handleChange}
              name="email"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <label>Total Experience</label>
            <Select label="Total Experience" options={Experience} />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <label>Relevant Experience</label>
            <Select label="Relevant Experience" options={Experience} />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
          <label>Level</label>
            <Select label="Level" options={Level} />
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={6} sm={6} md={3} lg={3}> 
         
            </Grid>
         <Grid item xs={6} sm={6} md={3} lg={3}>
            <label>Mode</label>
            <Select label="Relevant Experience" options={Mode} />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
          <label>Position interviewed for</label>
            <Select label="Level" options={Position} />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
          <label>Interviewer Name</label>
          <TextField
              //   label="Candidate Name"
              style={{margin: 8}}
              placeholder="Enter interviewer name"
              margin="normal"
              variant="outlined"
              size="small"
              // value={signInData.email}
              required
              // helperText={signInData.helperText['email']}
              // onChange={handleChange}
              name="interviewer"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(withStyles(styles)(FormHeader));
