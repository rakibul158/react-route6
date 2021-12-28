import React from 'react';
import './AddCountry.css'

const AddCountry = (props) => {
    const {name,flag} = props.data;
    return (
        <div className="add-country-item">
            <h5>{name}</h5>
            <img src={flag} style={{height:'50px'}} alt="" />
        </div>
    );
};

export default AddCountry;