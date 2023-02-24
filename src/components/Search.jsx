import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import "../styles/search.scss"
export const Search = ({ search }) => {
    const ref = useRef()
    return (
        <div className='search'>
            <input
            onKeyDown={(e) => {
                if(e.key === "Enter") search(ref.current.value)
            }}
            ref={ref} className='search-bar' placeholder='მოძებნე სიტყვა ინგლისურად...' type="search" name="" id="" />
            <button className='search-btn' onClick={() => search(ref.current.value)}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
}
