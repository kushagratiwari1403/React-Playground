import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ restData }) => {
    const { name, avgRating, cuisines, cloudinaryImageId, sla } = restData?.info;

    return (
        <div className="rest-card">
            <div className="rest-img-container">
                <img
                    className="rest-img"
                    src={CDN_URL + cloudinaryImageId}
                    alt="restaurant-img"
                />
                <div className="rest-offer">₹80 OFF ABOVE ₹399</div>
            </div>

            <div className="rest-content">
                <h3 className="rest-name">{name}</h3>
                <div className="rest-details">
                    <span className="rest-rating">⭐ {avgRating}</span>
                    <span> • </span>
                    <span>{sla.slaString}</span>
                </div>
                <p className="rest-cuisine">{cuisines.join(", ")}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;