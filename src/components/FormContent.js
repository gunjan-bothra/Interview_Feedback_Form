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
import TableContent from './TableContent';
import {Button} from '@material-ui/core';
import { connect } from 'react-redux';
import {addFeedback, initialSetup, saveFeedback} from '../actions/skillAction';
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyDocument from './PDF/PDF';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import PDFLink from './PDF/PDFLink';

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
  const [isPDFVisible, SetIsPDFVisible] = useState(false);

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
            <TableContent
              value={skill.value}
            //   rows={props.rows}
            // rows={feedBackItems}
              handleChange={handleChange}
              handleAddRow={handleAddRow}
            ></TableContent>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  };

  const handleDownloadPDF = () => {
    // return (<PDFDownloadLink
    //     document={<PdfDocument />}
    //     fileName="FeebackForm.pdf"
    //     style={{
    //       textDecoration: "none",
    //       padding: "10px",
    //       color: "#4a4a4a",
    //       backgroundColor: "#f2f2f2",
    //       border: "1px solid #4a4a4a"
    //     }}
    //   >
    //     {/* {({ blob, url, loading, error }) =>
    //       loading ? "Loading document..." : "Download Pdf"
    //     } */}
    //   </PDFDownloadLink>
    // );
    return (
      <PDFViewer>
        {/* <MyDocument></MyDocument> */}
        <Document>
    <Page >
      <View >
        <Text>Section #1</Text>
      </View>
      <View >
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
      </PDFViewer>
    )
  }
  const handleSubmit = () => {
    SetIsPDFVisible(true);
      props.saveFeedback(subSkillCheckBoxlist);
  }
  return (
  <>
  {expansionTabContent()}
  <div style={{paddingTop:'20px', align:"right"}}>
        <Button
          variant="contained"
          color="primary"
        onClick={handleSubmit}
        >
          Submit
        </Button>
        {isPDFVisible &&
          <PDFLink></PDFLink>
        } 
        {/* <Button
          variant="contained"
          color="primary"
          onClick={() => handleDownloadPDF()}
        >
          PDF
        </Button> */}

      </div>
  </>);
};

const mapStateToProps = (state) => {
    return {
        feedback: state.skillReducer.feedback,
        rows: state.skillReducer.rows
    }
}
export default connect(mapStateToProps, {addFeedback, initialSetup, saveFeedback})(withStyles(styles)(FormContent));
