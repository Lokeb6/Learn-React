import { useEffect, useState } from "react";
import { RES_MENU_API } from "../utilities/constants";

const useRestaurantMenu = (resId) => {
    const [restInfo , setRestInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(RES_MENU_API+resId);
        const json = await data.json();
        console.log(json);
        setRestInfo(json.data);
    }
    return restInfo;
}
 export default useRestaurantMenu;