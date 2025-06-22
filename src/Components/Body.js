import RestaurantCard from "./RestaurantCards";
import restaurantList from "../../utils/mockdata";

const Body = () => {
    return (
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn"> Top Rated </button> </div>
            <div className="restaurant-container">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                ))}
            </div>

        </div>
    )
};

export default Body