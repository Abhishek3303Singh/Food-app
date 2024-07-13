import { useState, useEffect } from "react"
import {RESTRO_DETAILS_URL} from "../../config"

const useRestaurantDetails = (restId)=>{
    const [restaurant, setRestaurant] = useState(null)
    const [resstroMenu, setRestroMenu] = useState([])
    useEffect(()=>{
        getRestaurantDetails()
    },[])
    async function getRestaurantDetails(){
        const data = await fetch(RESTRO_DETAILS_URL+restId)
        const json = await data.json()
        // console.log(json.data.cards[2].card.card.info)
        // console.log(json.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card, 'menyu')
        setRestroMenu(json.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        setRestaurant(json.data.cards[2].card.card.info)
    }
    return [restaurant, resstroMenu]
}
export default useRestaurantDetails