import { useEffect, useState } from "react"

export default function () {

    const [users, setUsers] = useState([]); // state for users

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}