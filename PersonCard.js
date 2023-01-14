export function PersonCard ({firstName, lastName, age, hairColor}){
    
    return (
        <div>
            <h2>{firstName},{lastName} </h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )    
}