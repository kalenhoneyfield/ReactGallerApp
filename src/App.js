import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

// component imports
import SearchForm from './components/SearchForm'
import NavButtons from './components/NavButtons'
import PhotoContainer from './components/PhotoContainer'

import './App.css';


const APIKEY = process.env.REACT_APP_API_KEY || 'apikey'
class App extends Component{

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  } 

  componentDidMount() {

    this.performSearch()
  }

  performSearch = (query = `field`) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      })
      console.log(response)
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    })
  }
  // performSearch = (query = `yeehaw`) => {
  //   axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=${APIKEY}`)
  //   .then(response => {
  //     this.setState({
  //       gifs: response.data.data,
  //       loading: false
  //     })
  //   })
  //   .catch(error => {
  //     console.log('Error fetching and parsing data', error);
  //   })
  // }

  render(){
    return (
      <div className="container">
  
        <SearchForm onSearch={this.performSearch}/>
  
        <NavButtons />
  
        <PhotoContainer photos={this.state.photos}/>
  
      </div>
    )
  }
  
}

export default App;
