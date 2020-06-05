import React from 'react'

// component imports
import SearchForm from './SearchForm'
import NavButtons from './NavButtons'

const MainPage = ({ performSearch, dynTags }) => {
    return(
        <header>
            <SearchForm onSearch={ performSearch }/>
        
            <NavButtons dynTags={ dynTags }/>
        </header>
    )
}

export default MainPage