const Card = (props) => {
    return (
        <>
            <input type='text' value={props.name} onChange={(e) => props.setName(e.target.value)} />
            <p>{props.title} value : {props.name}</p>
        </>
    )
}

export default Card