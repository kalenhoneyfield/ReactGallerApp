import React from 'react'

// component imports
import SearchForm from './SearchForm'
import NavButtons from './NavButtons'

const MainPage = (props) => {
    return(
        <header>
            <SearchForm onSearch={ props.performSearch } history={ props.history }/>
        
            <NavButtons dynTags={ props.dynTags } history={ props.history } performSearch={ props.performSearch }/>
        </header>
    )
}

export default MainPage