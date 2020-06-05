import React from 'react'

//import components
import Photo from './Photo'
import NoResults from './NoResults'


const PhotoList = (props) => {
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    const results = props.photos

    let photos
    if(results.length > 0){
      photos = results.map(foto =>  (
                 <Photo 
                    // farm0 was occasionally being included in the results, but DNS said it didn't exist. :-/ Setting this to farm66 seems to fix it
                    // working again 6/4
                    // url={`https://farm66.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}.jpg`} 
                    url={`https://farm${foto.farm}.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}.jpg`} 
                    title={foto.title}
                    key={foto.id} 

                  /> 
            )) 
      
    }
    else{
      photos = <NoResults />
    }
    return(
        <div className="photo-container">
        {/* <h2>Results</h2> */}
        <ul>

          {photos}

        </ul>
      </div>
    )
}

export default PhotoList