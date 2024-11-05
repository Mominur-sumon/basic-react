import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';


const Countries = () => {
    const [countries, setCOuntries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]) ;
    const [visitedFlags, setVisitedFlags] = useState([]) ;

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCOuntries(data)) ;
    } , [] );

    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    
    }

    return (
        <div >
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(visitedCountry => <li>{visitedCountry.name.common}</li>)
                    }
                </ul>
            </div>
            <div>
                <h5>Visited Flags: {visitedFlags.length}</h5>
                <ul>
                    {
                        visitedFlags.map(visitedFlag => <li><img src={visitedFlag.png} alt="" /></li>)
                    }
                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedFlag={handleVisitedFlag}
                    handleVisitedCountry={handleVisitedCountry}
                    country={country}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;