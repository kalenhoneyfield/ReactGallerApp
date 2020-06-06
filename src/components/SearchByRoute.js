import React, { Component } from 'react'


import PhotoContainer from './PhotoContainer'

class SearchByRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tag: ''
      }
    } 

  componentDidMount() {
    this.getParams()
    this.performSearch()
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.match.params.tag!==prevState.tag){
      return { tag: nextProps.match.params.tag};
   }
   else return null;
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
        <h2>Query: {this.state.tag} </h2>
  
        <PhotoContainer photos={this.props.photos}  />
  
      </div>
    );
  }

}

export default SearchByRoute;