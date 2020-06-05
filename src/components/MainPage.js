import React from 'react'

// component imports
import SearchForm from './SearchForm'
import NavButtons from './NavButtons'

const MainPage = ({ performSearch, dynTags, history }) => {
    return(
        <header>
            <SearchForm onSearch={ performSearch } history={history}/>
        
            <NavButtons dynTags={ dynTags } history={history} performSearch={ performSearch }/>
        </header>
    )
}

export default MainPage