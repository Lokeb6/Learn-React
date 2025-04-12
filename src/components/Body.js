import Restocard from "./Restocard";
import { useEffect, useState } from "react";
import Shimmmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

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
        console.log(json);
    };
    const onlineStatus = useOnlineStatus();
     if(onlineStatus === false) return <h1>Hey you are offline buddy.....check your connection</h1>
    return listOfRestaurants.length === 0? <Shimmmer/>:(
        <div className="body">
            <div className="p-4 m-4">
                <input type="text" className=" border border-solid border-black  m-1" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                <button className="m-2 bg-pink-100 px-4" onClick={()=> {
                    const filteredRest = listOfRestaurants.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())); 
                    setCopyList(filteredRest);
                }}>Search</button>
                    
                <button className="bg-pink-100 px-4" onClick={() => {
                    const filterList = listOfRestaurants.filter((item) =>
                     item.info.avgRating > 4.3 );
                    setCopyList(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap">
                {
                    copyList.map((restaurant)=>
                    (<Link to={"/restaurants/"+restaurant.info.id} style={{ textDecoration: 'none' }} key={restaurant.info.id}>
                        <Restocard  resData={restaurant}/>
                    </Link>))

                }           
            </div>
        </div>
  
    )
}

export default Body;