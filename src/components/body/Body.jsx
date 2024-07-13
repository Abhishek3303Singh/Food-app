import { restarunts } from '../../config'
import RestrauntCard from '../card/RestrauntCard'
import Search from '../search/Search'
import { useState, useEffect } from 'react'
import Shimmer from '../loader/Shimmer'
import { Link } from 'react-router-dom'
import { filterFunction } from '../utils/helper'
import useOnline from '../utils/useOnline'

import userContext from '../utils/context'
import { useContext } from 'react'


// function filterFunction(search, restroList) {
//   const filteredData = restroList.filter((restorant) => restorant.info.name.toLowerCase().includes(search.toLowerCase()))
//   return filteredData
// }
const Body = () => {
  const [searchData, setSearchData] = useState("")
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filterData, setFilterData] = useState([])
  const [shimmerData, setShimmerData] = useState(Array(8).fill(1))
  // console.log(props)

  useEffect(() => {
    getData()
    console.log('useEffect')
  }, [])

  // async function getData(){
  //     const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=25.616218&lng=85.1816316")
  //     let restroList = await data.json()
  //     console.log('Api call')
  //     setFilterData(restroList?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  //     console.log(restroList?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  // } 

  async function getData() {
    try {
      // const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=25.616218&lng=85.1816316");
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6542&lng=77.2373&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      console.log(response, 'check data')
      if (!response.ok) {
        if (response.status === 404) {
          console.error("Resource not found. Check the API endpoint.");
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid content type. Expected JSON.");
      }

      const restroList = await response.json();
      console.log('Api call', restroList);
      // setFilterData(restroList?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      // setAllRestaurants(restroList?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
      // console.log(restroList?.data?.success?.cards[4]?.gridWidget?.gridElements,'restro');
      // const cards =  restroList?.data?.success?.cards || []
      console.log('Running',restroList.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      setFilterData(restroList.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setAllRestaurants(restroList.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      // let targetCards;
      // for (const card of cards){
      //   if(card?.gridWidget?.gridElements?.infoWithStyle?.restaurants){
      //     targetCards = card
      //     break;
      //   }
      // }
      // if(targetCards){
      //   const restaurants = targetCards.gridWidget.gridElements.infoWithStyle.restaurants
      //   setAllRestaurants(restaurants);
      //   setFilterData(restaurants)
      // }
      // else
      // {
      //   throw new Error('Relevent card not Found')
      // }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  }
  console.log(allRestaurants, 'all restaurants')

  const isOnline = useOnline()
  if(!isOnline){
    return <h1>🔴Offline, please check your internet connection!!</h1>
  }
  console.log("render()")
  if(!allRestaurants){return null} // not rendered component (Early Returne)
  if (allRestaurants?.length == 0) {
    return (
      <div className="shimmer-container" data-testid = "shimmer">

        {shimmerData?.map((data) => (
          <Shimmer />


        ))}
      </div>

    )
  }
  return (

    <>
      <div className='search-main-container'>
        {/* <Search/> */}
        <div className="search-container">
          <input type="text" className='search'
            placeholder='Search here..'
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button data-testid="search-btn" onClick={() => {
            const data = filterFunction(searchData, allRestaurants);
            setFilterData(data)

          }}>search</button>
        </div>                                                 

      </div>
      <div className='restarunt-list' data-testid="res-list">
        {/* <RestrauntCard restaurant={restarunts[0]}/> */}
        {/* RestaurantCard(props) */}
        {/* send the data ussing spread operator */}
        {/* <RestrauntCard {...restarunts[0].info}/>
            <RestrauntCard {...restarunts[1].info}/>
            <RestrauntCard {...restarunts[2].info}/>
            <RestrauntCard {...restarunts[3].info}/>
            <RestrauntCard {...restarunts[4].info}/> */}


        {/* now we can send the data using map to avoid the repeatation */}
        {
          filterData?.map((resto, key) => {
            return (
              <Link to={'/restraunt/'+resto.info.id}>
            
              <RestrauntCard {...resto.info} key={resto.info.id} />

           

               </Link>

            )
          })
        }

      </div>
    </>

  )
}

export default Body