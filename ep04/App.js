import React from "react";
import ReactDOM from "react-dom/client"

//** 
// * Header
//    -Logo 
//    -Navigation Items

// * Body 
//    -Search Bar
//    -Card Container For Restaurants
//    -Restaurants Card
// * Footer
//    -Copyright
//    -Links
//    -Address
//    -Contact
// *
//  */

const Header = () => {
    return (
        <div className="header">

            <div className="logo-container">
                <img
                    className="logo"
                    src="https://i.pinimg.com/736x/eb/4f/74/eb4f749fd1c95eefe5cccbcd325d8299.jpg" alt="food-logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>

    )
};

// const RestaurantCard = () => {
//     return (
//         <div className="rest-card">
//             <img className="rest-img" src="" alt="restaurant-img" />
//             <h3 className="rest-name">Meri Rasoi</h3>
//             <h4>North Indian, South Indian, Italian</h4>
//             <h4>4.4 Stars</h4>
//             <h4>38 mins</h4>
//         </div>
//     )
// };

const RestaurantCard = ({ restData }) => {
    const { name, avgRating, cuisines, cloudinaryImageId, sla } = restData?.info;

    return (
        <div className="rest-card">
            <div className="rest-img-container">
                <img
                    className="rest-img"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
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



const restaurantList = [
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1003414",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
            "locality": "Chhindwara",
            "areaName": "Parasia Road",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "128",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-22 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹59"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-013403d4-d128-44c8-86ad-c79054795c41"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "234875",
            "name": "Adil Hotel",
            "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
            "locality": "Rautha Wada",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Tandoor"
            ],
            "avgRating": 4.3,
            "parentId": "27123",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-22 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/big%20RX%20listing%2018px.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/big%20RX%20listing%2018px.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-013403d4-d128-44c8-86ad-c79054795c41"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "150586",
            "name": "Accord International",
            "cloudinaryImageId": "ntcsuou2650qimnkrc3m",
            "locality": "Parasia Road",
            "areaName": "Vishnu Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "South Indian",
                "Continental",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "26828",
            "avgRatingString": "4.4",
            "totalRatingsString": "649",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-21 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-013403d4-d128-44c8-86ad-c79054795c41"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/accord-international-parasia-road-vishnu-nagar-rest150586",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1003415",
            "name": "Pastas By Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/f249ac91-2d8f-472b-b60c-4a7ea4ed9f86_1003415.jpg",
            "locality": "Chhindwara",
            "areaName": "Parasia Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pastas"
            ],
            "avgRating": 3.7,
            "parentId": "306806",
            "avgRatingString": "3.7",
            "totalRatingsString": "6",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-22 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-013403d4-d128-44c8-86ad-c79054795c41"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/pastas-by-pizza-hut-parasia-road-rest1003415",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "898041",
            "name": "Thikana",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
            "locality": "RANGLA PUNJAB PARASIA ROAD",
            "areaName": " ADARSH NAGAR CHHINDWARA",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Indian"
            ],
            "avgRating": 4.2,
            "parentId": "215738",
            "avgRatingString": "4.2",
            "totalRatingsString": "49",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-21 23:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-013403d4-d128-44c8-86ad-c79054795c41"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/thikana-rangla-punjab-parasia-road-adarsh-nagar-chhindwara-rest898041",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1046503",
            "name": "The Kohli's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/6a4369e1-0c9c-49f9-8132-5be682a7831f_1046503.jpg",
            "locality": "Chhindwara City",
            "areaName": "Chhindwara City",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "Biryani",
                "Beverages",
                "Tandoor",
                "Salads",
                "Snacks",
                "Pastas",
                "Fast Food",
                "North Indian"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "608777",
            "avgRatingString": "4.1",
            "totalRatingsString": "74",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-21 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹749",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-013403d4-d128-44c8-86ad-c79054795c41"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/the-kohlis-chhindwara-city-rest1046503",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "615927",
            "name": "Roof 5",
            "cloudinaryImageId": "glepanv4xjfnhsbieam1",
            "locality": "Adarsh Nagar Colony",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Indian"
            ],
            "avgRating": 4.2,
            "parentId": "171348",
            "avgRatingString": "4.2",
            "totalRatingsString": "173",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-21 23:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-013403d4-d128-44c8-86ad-c79054795c41"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/roof-5-adarsh-nagar-colony-chhindwara-locality-rest615927",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "196341",
            "name": "Rangla Panjab",
            "cloudinaryImageId": "hxxasn2kf8g9eyi9eonq",
            "locality": "Shankaracharya Nagar",
            "areaName": "Prasia Road",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "166894",
            "avgRatingString": "4.2",
            "totalRatingsString": "465",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-06-21 23:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-013403d4-d128-44c8-86ad-c79054795c41"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/rangla-panjab-shankaracharya-nagar-prasia-road-rest196341",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];



const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search </div>
            <div className="restaurant-container">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                ))}
            </div>

        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
