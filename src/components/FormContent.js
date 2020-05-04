import React, {useRef, useState, Component} from 'react';
import {
  Paper,
  Tabs,
  Tab,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanel,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from '@material-ui/core/styles';
import withStyles from '@material-ui/styles/withStyles';
import Assessment from './Assessment';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));
const styles = (theme) => ({
    root: {
      width: '100%',
    },
    heading: {
    //   fontSize: theme.typography.pxToRem(15),
    //   fontWeight: theme.typography.fontWeightRegular,
    },
  });

class FormContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addAssessment: false
    };
    this.subSkillsContent = this.subSkillsContent.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.expansionTabContent = this.expansionTabContent.bind(this);
  }
//   const classes = useStyles();
  // const [addAssessment, setAddAssessment] = useState(false);
  // const [input, setInput] = useState([]);
  subSkillsContent = (subSkills) => {
    return subSkills.map((subSkill) => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              //  checked={state.checkedA}
              //  onChange={handleChange}
              name="checkedA"
            />
          }
          label={subSkill}
        />
      );
    });
  };

  handleAdd = (event, value) => {
    // console.log(inputEl.current);
    //     console.log(value);
    // setAddAssessment(true);
    // let arr = [...input];
    // arr.push(<Assessment></Assessment>);
    // setInput(arr);
  };
  expansionTabContent = () => {
    return this.props.Skills.map((skill) => {
      return (
        <ExpansionPanel key={skill.value}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={this.props.classes.heading}>
              {skill.label}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{display: 'block'}}>
            <div>
              <FormGroup row>
                {skill.subSkill ? this.subSkillsContent(skill.subSkill) : ''}
              </FormGroup>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={(event) => this.handleAdd(event, skill.value)}
              >
                Add
              </Button>
            </div>
            {/* {addAssessment && (
                // <Assessment></Assessment>
                {input}
                )} */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  };
  render() {
    return <>{this.expansionTabContent()}</>;
  }
}

export default withStyles(styles)(FormContent);
