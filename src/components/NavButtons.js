import React from 'react'
import { NavLink } from 'react-router-dom'


const NavButtons = (props) => {

    let links = props.dynTags.map((dynLink, idx) => {
      //this very heavy handed approach was used because React was throwing a fit regard unique keys.
      //begin sledge hammer
      let randomKey = "";
      const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 32; i++) {
        randomKey += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      //end sledge hammer
      return (
          <li key={randomKey + idx} onClick={() => { 
                                            props.history.push(`/tags/${dynLink}`) 
                                            props.performSearch(dynLink, 1, 12)
                                            }  }> 
            <NavLink to={`/search/${dynLink}`} key={randomKey} > 
              {dynLink}  
            </NavLink> 
          </li>
      )
      //and now React has stopped yelling about unique keys. 
    }
      
    )


    return(
        <nav className="main-nav">
        <ul>
          {links}
        </ul>
      </nav>
    )
}

export default NavButtons