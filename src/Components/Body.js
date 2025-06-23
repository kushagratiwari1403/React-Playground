import RestaurantCard from "./RestaurantCards";
import restaurantList from "../../utils/mockdata";
import { useState } from "react";

const Body = () => {

    //Local State Variable - Super powerful variable
    let [demoListRestaurant, setdemoListRestaurant] = useState(restaurantList)

    // Normal JS Variable
    // let demoListRestaurnat = null;
    

    // Normal JS Variable
    // let demoListRestaurantOld = [
    //     {
    //         "info": {
    //             "id": "1003414",
    //             "name": "Pizza Hut",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
    //             "locality": "Chhindwara",
    //             "areaName": "Parasia Road",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //                 "Pizzas"
    //             ],
    //             "avgRating": 3.9,
    //             "parentId": "721",
    //             "avgRatingString": "4.2",
    //             "totalRatingsString": "128",
    //             "sla": {
    //                 "deliveryTime": 23,
    //                 "lastMileTravel": 1.3,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "20-25 mins",
    //                 "lastMileTravelString": "1.3 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             }
    //         }
    //     },

    //     {
    //         "info": {
    //             "id": "234875",
    //             "name": "Adil Hotel",
    //             "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
    //             "locality": "Rautha Wada",
    //             "areaName": "Chhindwara Locality",
    //             "costForTwo": "₹150 for two",
    //             "cuisines": [
    //                 "North Indian",
    //                 "Biryani",
    //                 "Tandoor"
    //             ],
    //             "avgRating": 3.3,
    //             "parentId": "27123",
    //             "avgRatingString": "4.3",
    //             "totalRatingsString": "1.3K+",
    //             "sla": {
    //                 "deliveryTime": 17,
    //                 "lastMileTravel": 0.7,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "15-20 mins",
    //                 "lastMileTravelString": "0.7 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             }
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "234876",
    //             "name": "Silver Hotel",
    //             "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
    //             "locality": "Rautha Wada",
    //             "areaName": "Chhindwara Locality",
    //             "costForTwo": "₹150 for two",
    //             "cuisines": [
    //                 "North Indian",
    //                 "Biryani"

    //             ],
    //             "avgRating": 4.3,
    //             "parentId": "27123",
    //             "avgRatingString": "4.3",
    //             "totalRatingsString": "1.3K+",
    //             "sla": {
    //                 "deliveryTime": 17,
    //                 "lastMileTravel": 0.7,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "15-20 mins",
    //                 "lastMileTravelString": "0.7 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             }
    //         }
    //     }
    // ]

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