import React from 'react';
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
import {TabsText} from '../../Constants/HeaderConstant';
import Collapsible from 'react-collapsible';
import {makeStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Round1 , Round2, Round3} from '../../Constants/HeaderConstant';
import FormContent from '../../components/FormContent';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const FormTabs = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  const classes = useStyles();
  const handleTabChange = (event, newValue) => {
    setSelectedTabIndex(newValue);
  };

  const tabItems = () => {
    let tabs = TabsText.map((tab) => {
      return <Tab label={tab} />;
    });
    return tabs;
  };
  return (
    <Paper
    // className={classes.root}
    >
      <Tabs
        value={selectedTabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {tabItems()}
      </Tabs>
      {selectedTabIndex === 0 && (
      <FormContent Skills={Round1}></FormContent>
      )}
      {selectedTabIndex === 1 && (
      <FormContent Skills={Round2}></FormContent>
      )}
      {selectedTabIndex === 2 && (
      <FormContent Skills={Round3}></FormContent>
      )}
    </Paper>
  );
};

export default FormTabs;
