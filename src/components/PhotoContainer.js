import React from 'react'

//import components
import Photo from './Photo'
import NoResults from './NoResults'


const PhotoList = (props) => {
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    const results = props.photos
    console.log(props)
    let photos
    if(results.length > 0){
      photos = results.map(foto =>  (
                 <Photo 
                    url={`https://farm${foto.farm}.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}.jpg`} 
                    key={foto.id} 
                  /> 
            )) 
      
    }
    else{
      photos = <NoResults />
    }
    return(
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {/* <li>
            <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
          </li> */}
          {photos}

        </ul>
      </div>
    )
}

export default PhotoList