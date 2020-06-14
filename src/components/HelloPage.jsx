import React from 'react'

const HelloPage = (props) => {
    return (
        <div>
            Hello my name is {props.name}
            <p>Age: {props.age}</p>
        </div>
    )
}

export default HelloPage
