import Restocard from "./Restocard";
import resList from "../utilities/mockData";
import { useEffect, useState } from "react";
import Shimmmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [copyList, setCopyList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6794982&lng=83.2032347&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCopyList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants.length === 0? <Shimmmer/>:(
        <div className="body">
            <div className="filter">
                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                <button className="Search-btn" onClick={()=> {
                    const filteredRest = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())); 
                    setCopyList(filteredRest);
                }}>Search</button>
                    
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurants.filter((item) => item.info.avgRating > 4.3 );
                    setListOfRestaurants(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    copyList.map((restaurant)=>(<Restocard key={restaurant.info.id} resData={restaurant}/>))

                }           
            </div>
        </div>
  
    )
}

export default Body;