import { IMG_CDN_URL } from "../../config"
const RestrauntCard = ({name,cloudinaryImageId,cuisines,avgRatingString,sla,aggregatedDiscountInfoV3})=>{

    // again DeStructure
    // const {name,cloudinaryImageId,cuisines,avgRatingString} = restaurant.info
    console.log(aggregatedDiscountInfoV3, 'agregatedDiscount')
    return(
        <div className='card'>
            <img alt="image" src={IMG_CDN_URL+cloudinaryImageId}  />
            <h1>{aggregatedDiscountInfoV3?.header}  {aggregatedDiscountInfoV3?.subHeader}</h1>
            <h2>{name}</h2>

            <h3>{cuisines.join(',')}</h3>
            <h4>{avgRatingString} Stars</h4>
            <p>Av. Delivery Time: {sla.deliveryTime} Minutes</p>
         </div>
        
    )
}

export default RestrauntCard