import React from 'react'

// component will not re-render until props change
const ChildComponent = React.memo((props) => {
    console.log("Child component is re-rendered again");
    return (
        <div>
            <button onClick={props.handleClick}>
                {props.buttonName}
            </button>
        </div>
    )
})

export default ChildComponent