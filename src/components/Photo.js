import React from 'react'

const Photo = (props) => {

    // const logIt = (e) => {
    //     console.log(e.target.alt, e.target.src)
    // }

    return(
        <li>
            <img 
                src={props.url} 
                alt={props.title} 
            //     onClick={e => {
            //         logIt(e)
            // }}
            />
        </li>

    )
}

export default Photo