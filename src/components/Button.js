import React from 'react';
import {Button} from '@material-ui/core';
import { handleRowItem } from '../actions/skillAction';
import {connect} from 'react-redux';

const UIButton = (props) => {
    const {skillID, idx, item} = props;
    const handleRowItem = (id) => {
        props.handleRowItem(id);
    }
    
    return (
        <Button
        onClick={() => handleRowItem( `${skillID}-${idx}`)}
        //  onClick={() => handleRowItem()}
         >Done</Button>
    );
}

export default connect(null, {handleRowItem})(UIButton);