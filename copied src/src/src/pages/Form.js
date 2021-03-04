import React from 'react';
import FormHeader from './FormHeader';
import FormTabs from './FormTabs/FormTabs';
// import './Form.css';
import './Form.css';
const Form = (props) => {
    return (
        <div>
            <div className="form" style={{borderBottom: '1px solid black', height:'30px', padding:'10px'}}>Candidate Feedback Form</div>
        <div style={{borderBottom: '1px solid black'}}>
            <FormHeader></FormHeader>
        </div>
        <div>
            <FormTabs></FormTabs>
        </div>
        </div>
    );
}

export default Form;