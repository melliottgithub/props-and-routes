import React from 'react'

const Image = (props) => {
    return (
        <img
          src={props.urlImage}
          alt={props.name}
        />
    )
}

export default Image
