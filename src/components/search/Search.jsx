import React from 'react'
import { useState } from 'react'
import { restarunts } from '../../config'


function filterFunction(search, restroList){
  const filteredData = restroList.filter((restorant)=>restorant.info.name.includes(search))
  return filteredData
}

const Search = () => {
  
  var count  = 0
    const [searchData, setSearchData] = useState("")
    const [filterData, setFilterData] = useState(restarunts)
    let data = "KFC"  
    
    console.log(filterData)

  return (
    <>
        <div className="search-container">
        <input type="text" className='search' 
        placeholder='Search here..' 
        value={searchData}
        onChange={(e)=>setSearchData(e.target.value)}
        />
        <button onClick={()=>{
          const data=filterFunction(searchData, filterData);
          setFilterData(data)

        }}>search</button>
        </div>
    </>
  )

}

export default Search