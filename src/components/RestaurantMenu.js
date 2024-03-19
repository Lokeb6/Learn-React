import { useEffect, useState } from "react";
import Shimmmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_API } from "../utilities/constants";



const RestaurantMenu = () => {
    const [restInfo , setRestInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(RES_MENU_API+resId);
        const json = await data.json();
        console.log(json);
        setRestInfo(json.data);
    }
    if (restInfo===null) return <Shimmmer/>
    const {name, cuisines, costForTwoMessage} = restInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)
    return (
        <div className="RestaurantInfo">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}- {costForTwoMessage}</h2>
            <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100} </li>)}
            </ul>
        </div>
    )
}
export default RestaurantMenu;