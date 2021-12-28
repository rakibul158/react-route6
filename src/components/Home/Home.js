import React, { useEffect, useState } from 'react';
import AddCountry from '../AddCountry/AddCountry';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {
    const [countrys, setConuntery] = useState([]);
    const [addCountery, setAddCountery] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setConuntery(data))
        .catch(error => console.log('error'));
    },[]);

    const handleAddCountry = (name) => {
        const newCountry = [...addCountery, name];
        setAddCountery(newCountry);
    }

    return (
        <div className="country">
            <div className="country-container">
                <h2>Total Country: {countrys.length}</h2>
                {
                    countrys.map(country => 
                        <Country key={country.name} data={country} handleAddCountry={handleAddCountry}></Country>
                    )
                }
            </div>
           <div className="add-country-container">
            <h4>Added Country: {addCountery.length}</h4>
               {
                   addCountery.map(countryAdd => <AddCountry key={countryAdd.name} data={countryAdd}></AddCountry>)
               }
           </div>

        </div>
    );
};

export default Home;