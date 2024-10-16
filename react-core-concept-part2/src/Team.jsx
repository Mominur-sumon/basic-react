import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(0)
    

    const teamStyle = {
        border : '2px solid purple',
        borderRadius : '20px',
        padding : '10px',
        margin : '10px'
    }

    const handleAdd = () => {
        setTeam(team + 1);
    }
    const handleRemove = () => {
        setTeam(team - 1);
    }

    return (
        <div style={teamStyle}>
            <h3>Team Members: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}