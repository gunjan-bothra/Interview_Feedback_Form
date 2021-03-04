import React, {useRef, useState, useEffect} from 'react';
import {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanel,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from '@material-ui/core/styles';
import withStyles from '@material-ui/styles/withStyles';
import Assessment from './Assessment';
import InputTable from './InputTable';
import {Button} from '@material-ui/core';
import { connect } from 'react-redux';
import {addFeedback, initialSetup} from '../actions/skillAction';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
});
const row = {
  question: '',
  assessment: '',
  rating: '',
  attachment: '',
};
const oSkills = {
  checkbox: [],
};

const FormContent = (props) => {
  const [skillsList, setSkillsList] = useState({});
  const [subSkillCheckBoxlist, setSubSkillCheckBoxlist] = useState({});

  useEffect(() => {
    props.initialSetup(props.Skills);
  },[])

  const handleSubSkillSelected = (event, idx, label) => {
    console.log(label + '-' + idx);
    const split = idx.split('-');
    if (!subSkillCheckBoxlist[split[0]]) {
      subSkillCheckBoxlist[split[0]] = {...oSkills};
    }
    let updateCheckBoxItems = [];
    const oCopiedSkillSet = {...subSkillCheckBoxlist};
    const checkboxItems = oCopiedSkillSet[split[0]].checkbox;
    if (event.target.checked === false) {
      for (let i = 0; i < checkboxItems.length; i++) {
        if (checkboxItems[i].index === split[1]) {
          checkboxItems.splice(i, 1);
          break;
        }
      }
    } else {
      updateCheckBoxItems = [
        ...checkboxItems,
        {index: split[1], subskill: label},
      ];
    }
    oCopiedSkillSet[split[0]].checkbox = updateCheckBoxItems;
    setSubSkillCheckBoxlist(oCopiedSkillSet);
  };
  const subSkillsContent = (skill) => {
    return skill.subSkill.map((subSkill, idx) => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              id={`${subSkill}-${idx}`}
              onChange={(event) =>
                handleSubSkillSelected(event, `${skill.value}-${idx}`, subSkill.label)
              }
              //    checked={state.checkedA}
              name="checkedA"
            />
          }
          label={subSkill.label}
        />
      );
    });
  };

  const handleChange = (index, list) => {
    if (Object.keys(skillsList).length) {
        if (!skillsList[index]) {
            setSkillsList({...skillsList, ...list});
        } else {
            setSkillsList({...skillsList.feedback, ...list});
        }
    } else {
      setSkillsList(list);
    }
    
  };

  const handleAddRow = (value) => {
    const list = {...skillsList};
    list[value].feedback.push({...row});
    setSkillsList(list);
  };
  const expansionTabContent = () => {
    let feedBackItems = [];
    return props.Skills.map((skill) => {
      if (skillsList[skill.value]) {
        feedBackItems = skillsList[skill.value].feedback;
      } else {
        feedBackItems = [{...row}];
      }
    //   props.setFeedback(feedBackItems);
      return (
        <ExpansionPanel key={skill.value}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={props.classes.heading}>
              {skill.label}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{display: 'block'}}>
            <div>
              <FormGroup row>
                {skill.subSkill ? subSkillsContent(skill) : ''}
              </FormGroup>
            </div>
            <InputTable
              value={skill.value}
            //   rows={props.rows}
            // rows={feedBackItems}
              handleChange={handleChange}
              handleAddRow={handleAddRow}
            ></InputTable>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  };

  const handleSubmit = () => {
      const report = {
          checkbox: [...setSubSkillCheckBoxlist.checkbox],
          feedback: [...setSkillsList.feedback]
      }
  }
  return (
  <>
  {expansionTabContent()}
  <div style={{paddingTop:'20px'}}>
        <Button
          variant="contained"
          color="primary"
        onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          //   onClick={() => handleAddRow(value)}
        >
          PDF
        </Button>
      </div>
  </>);
};

const mapStateToProps = (state) => {
    return {
        feedback: state.skillReducer.feedback,
        rows: state.skillReducer.rows
    }
}
export default connect(mapStateToProps, {addFeedback, initialSetup})(withStyles(styles)(FormContent));
