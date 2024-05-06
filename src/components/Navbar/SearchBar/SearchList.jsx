import React from 'react'
import './SearchList.css'
import { FaSearch } from 'react-icons/fa'

function SearchList({ SearchArray, setSearchQuery, setSearchListShow }) {
    return (
        <>
            <div className="Container_SearchList">
                {SearchArray.map(item => {
                    return (<p className="titleItem" key={item} onClick={() => { setSearchQuery(item); setSearchListShow(false) }}>
                        <FaSearch className='ListSearchIcon' />
                        <span className='ListItem'>{item}</span>
                    </p>)
                })}
            </div>
        </>
    )
}

export default SearchList
