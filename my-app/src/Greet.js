//praticing Functional Components
import React from 'react'

 function Greet(props) {
    return (
        <div>
            <h1>Hello {props.children}</h1>
        </div>
    )
}

export default Greet