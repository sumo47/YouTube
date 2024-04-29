import React, { useState } from 'react'
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa'
import { BsMicFill } from 'react-icons/bs'
import SearchList from './SearchList'

function SearchBar() {
    const [SearchQuery, setSearchQuery] = useState("")
    const [SearchListShow, setSearchListShow] = useState(false)
    const SearchArray = ["the matrix", "superMan", "batman", "Wonder woman", "thor"].filter(item => item.toLowerCase().includes(SearchQuery.toLowerCase()))
    return (
        <>
            <div className="SearchBar_Container">
                <div className="SearchBar_Container2">
                    <div className="search_div">
                        <input type="text" className='iBox_SearchBar' placeholder='Search' onChange={e => setSearchQuery(e.target.value)} onClick={e => setSearchListShow(true)} value={SearchQuery}/>
                        <FaSearch className='searchIcon_SearchBar' onClick={e => setSearchListShow(false)} />
                        <BsMicFill className='Mic_SearchBar' />
                        {SearchQuery && SearchListShow && <SearchList SearchArray={SearchArray} setSearchQuery = {setSearchQuery} setSearchListShow={setSearchListShow} />}
                    </div>
                </div>

            </div>
        </>
    )
}

export default SearchBar
