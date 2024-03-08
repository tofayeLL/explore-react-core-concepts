export default function Musicians({singer}){
    return (
        <div>
            <h3>singer: {singer.name}</h3>
            <p>Age: {singer.age}</p>
        </div>
    )
}