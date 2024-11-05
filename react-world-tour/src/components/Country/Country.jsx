import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    const {name, flags, population, area, cca3} = country;
    console.log(country);

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(true);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited </button> 
            <button onClick={handleVisited}>Visited</button>
        
            <button onClick={()=>handleVisitedFlag(country.flags)}>Add Flags </button>
            {
                visited && <p><small>I have Visited this country</small></p>
            }
        </div>
    );
};

export default Country;