
import { useEffect, useState } from 'react';
import './Friends.css';
import Friend from './Friend';

export default function Friends() {

    const [friends, setFriends] = useState([]); // state for users

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);


    return (
        <div>
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend} ></Friend>)
            }
        </div>
    )

}