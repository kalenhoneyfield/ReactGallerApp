import React from 'react';
import { useParams } from 'react-router-dom'

import PhotoContainer from './PhotoContainer'

const SearchByRoute = (props) => {
  let tag = useParams().tag

  return (
    <div className="main-content">
      <h2>Query: {tag} </h2>

      <PhotoContainer photos={props.photos}  />

    </div>
  );
}

export default SearchByRoute;