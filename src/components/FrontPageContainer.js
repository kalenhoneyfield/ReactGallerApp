import React from 'react'

//import components
import Photo from './Photo'


const FrontPageContainer = (props) => {
    return(
      <div className="container">

            <Photo 
                    url={`https://farm66.staticflickr.com/65535/49964915943_da5feb008e.jpg`} 
                    // title={`foto.title`}

                  /> 

      </div>
    )
}

export default FrontPageContainer