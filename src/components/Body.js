import Restocard from "./Restocard";
import resList from "../utilities/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurants.filter((item) => item.info.avgRating > 4.3 );
                    setListOfRestaurants(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant)=>(<Restocard key={restaurant.info.id} resData={restaurant}/>))

                }           
            </div>
        </div>
  
    )
}

export default Body;