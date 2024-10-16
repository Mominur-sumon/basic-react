
export default function Friend({friend}) {
    const {name, email} = friend;
    console.log(friend);
    return (
        <div className='box'>
            <h3>Name: {name}</h3>
            <p>Email : {email}</p>
        </div>
    )
}