
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { IMG_CDN_URL } from "../../config"
import Shimmer from '../loader/Shimmer'
import useRestaurantDetails from '../utils/useRestraurantDetails'
import './RestaurantDetails.css'
import { useDispatch } from 'react-redux'
import { addItems } from '../../store/cartSlice'

const RestrauntDetails = () => {


  const params = useParams()

  const { id } = params

  const [restaurantDetails, restruMenu] = useRestaurantDetails(id)
  const dispatch = useDispatch()
  // console.log(restruMenu[0]?.card?.info?.name, 'menu')
  // we are creating cusome hook for fetch 
  // useEffect(()=>{
  //     getRestaurantDetails()
  // },[])
  // async function getRestaurantDetails(){
  //     const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6542&lng=77.2373&restaurantId="+id)
  //     const json = await data.json()
  //     // setRestaurantDetails(json.data.cards[2].card.card.info)
  // }
  const handleCart = (name)=>{
    console.log(name,'cartItems')
    dispatch(addItems(name))

  }
  return (
    !restaurantDetails ? (<Shimmer />) :
    <>
      <div className='menuContainer'>
        <div className="menuLeftContainer">


          <img src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId} alt="" />

        </div>
        <div className="menuRightContainer">
          <h1>{restaurantDetails.name}</h1>
          <h2>Restraunt id is : {id}</h2>
          <h3>cost for two:{restaurantDetails.costForTwoMessage}</h3>
          <p>Area:{restaurantDetails.areaName}</p>
          <p>Locality:{restaurantDetails.areaName}</p>
          <p>{restaurantDetails.avgRatingString}stars</p>
          <button>Add to cart</button>

        </div>
        


      </div>

      <div className="menu">
          <h3>Menu</h3>
          <hr class="basic-line" />
          <div className="menuItemContainer" data-testid = "menu">
          {
              restruMenu?.map((item) => {
                return (
                  <div key={item?.card?.info?.id} className='menuItems'>
                    <h2>{item?.card?.info?.name}</h2>
                    <img src={IMG_CDN_URL + item?.card?.info?.imageId} alt="" />
                    <h3 className='price'>&#8377; {(item?.card?.info?.price) / 100}</h3> 
                    <button className='add' data-testid='addBtn' onClick={()=>handleCart(item?.card?.info)}>Add</button>
                  </div>
                )
              })
            }
          </div>
            

          
        </div>

      </>

  )
}

export default RestrauntDetails
