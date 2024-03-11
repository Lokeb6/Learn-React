import { LOGO_LINK } from "../utilities/constants";

const Restocard = ({resData}) => {

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    const{deliveryTime} = resData?.info.sla;

    return(
        <div className="res-card">
            <img className="res-logo" src={LOGO_LINK+ cloudinaryImageId} />
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{"Rating: "+avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime+" minutes"}</h4>
        </div>
    )
}

export default Restocard;