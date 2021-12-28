import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css'

const CountryDetails = () => {
    const {name} = useParams();

    const [country, setConuntery] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.com/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setConuntery(data));
    },[]);

    function ConunteryDetalis(props)
    {
        const {name,capital,region,population,area,nativeName,flag} = props.data;
        return(
            <div className="country-details">
                <h2>{name}</h2>
                <img src={flag} alt="" style={{height:'100px'}}/>
                <p><strong>Capital: </strong> {capital}</p>
                <p><strong>Region: </strong> {region}</p>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Area: </strong>{area}</p>
                <p><strong>NativeName: </strong> {nativeName}</p>
            </div>
            
        );
        
    }

    return (
        <div>
            {
                country.map(country => <ConunteryDetalis key={country.name} data={country}></ConunteryDetalis>)
            }
        </div>
    );
};

export default CountryDetails;