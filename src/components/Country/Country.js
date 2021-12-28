import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const {name,region,capital,flags} = props.data;
    const navigate = useNavigate();
    //console.log(name);
    const handleBtnClick = (name) => {
        const url = `/country/${name}`;
        navigate(url);
    }

    return (
        <div className="country">
            <h4>{name}</h4>
            <img style={{height:'100px'}} src={flags.svg} alt="" />
            <p>Region - {region}</p>
            <p>Capital - {capital}</p>
            <button className="btn btn-primary" onClick={() => handleBtnClick(name)}>Country Details</button>
        </div>
    );
};

export default Country;