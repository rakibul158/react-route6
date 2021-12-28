import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countrys, setConuntery] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setConuntery(data))
        .catch(error => console.log('error'));
    },[]);

    return (
        <div>
            <h2>Total Country: {countrys.length}</h2>
            {
                countrys.map(country => <Country key={country.name} data={country}></Country>)
            }
        </div>
    );
};

export default Home;