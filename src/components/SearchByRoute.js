import React, { Component } from 'react'

import PhotoContainer from './PhotoContainer'

class SearchByRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tag: '',
      whyIsgetParamsNotUpdatingState: this.props.match.params.tag
      }
    } 

  componentDidMount() {
    this.getParams()
    this.performSearch()
    console.log(this.state.whyIsgetParamsNotUpdatingState)
  }

  getParams = () => {
    this.setState(prevState => {
      return { tag: this.props.match.params.tag }
    })
  }

  performSearch = () => {
    this.props.performSearch(this.props.match.params.tag, 1, 24)
  }

  render(){

    return (
      <div className="main-content">
        <h2>Tag: {this.props.searchWord ? this.props.searchWord : this.state.tag ? this.state.tag : 'pants'} </h2>

        <PhotoContainer photos={this.props.photos}  />
  
      </div>
    );
  }

}

export default SearchByRoute;