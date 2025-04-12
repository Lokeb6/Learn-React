
import Shimmmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilities/useRestaurantMenu";


const RestaurantMenu = () => {
    const {resId} = useParams();
    const restInfo = useRestaurantMenu(resId);

    console.log(restInfo);


    if (restInfo===null) return <Shimmmer/> 
    const {name, cuisines, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info;
    const menuData = restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
    const { itemCards = menuData?.categories?.[0]?.itemCards ?? [] } = menuData;
    console.log(itemCards)
    return (
        <div className="RestaurantInfo">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}- {costForTwoMessage}</h2>
            <ul>
                {itemCards.map((item)=>
                <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100} </li>)}
            </ul>
        </div>
    )
}
export default RestaurantMenu;