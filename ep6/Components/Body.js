// Episode 6

import RestaurantCard from "./RestaurantsCards";
import { useState, useEffect } from "react";

const Body = () => {

    //Local State Variable - Super powerful variable
    let [demoListRestaurant, setdemoListRestaurant] = useState([])

    // Normal JS Variable
    // let demoListRestaurnat = null;

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.057437&lng=78.9381729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        setdemoListRestaurant(json?.data?.cards?.find(
            (c) =>
                c?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };







    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        let filteredList = demoListRestaurant.filter(
                            (res) => res.info.avgRating > 4.1);

                        setdemoListRestaurant(filteredList)

                    }}
                > Top Rated </button> </div>
            <div className="restaurant-container">
                {demoListRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                ))}
            </div>

        </div>
    )
};

export default Body