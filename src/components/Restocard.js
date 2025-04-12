import { LOGO_LINK } from "../utilities/constants";

const Restocard = ({resData}) => {

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    const{deliveryTime} = resData?.info.sla;

    return(
        <div className="res-card border border-solid border-black w-56 h-auto p-2 m-2 rounded-lg hover:bg-pink-100">
            <img className="w-56 rounded-lg" src={LOGO_LINK+ cloudinaryImageId} />
            <h4 className="font-bold">{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{"Rating: "+avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime+" minutes"}</h4>
        </div>
    )
}

export default Restocard;