import React from 'react'

// component imports
import SearchForm from './SearchForm'
import NavButtons from './NavButtons'

const MainPage = (props) => {
    console.log(props)
    return(
        <header>
            <SearchForm onSearch={ props.performSearch } history={ props.history } handleHistoryPush={props.handleHistoryPush}/>
        
            <NavButtons dynTags={ props.dynTags } history={ props.history } performSearch={ props.performSearch } handleHistoryPush={props.handleHistoryPush}/>
        </header>
    )
}

export default MainPage