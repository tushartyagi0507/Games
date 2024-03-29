import RestoCard from "./RestoCard.js";
import { useEffect, useState } from "react";
import ShimmerContainer from "./ShimmerContainer.js";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus.js";

const Body = () => {
  const onlineStatus = useonlineStatus();
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  // this is destructruing of the array which is returned by useState(),
  console.log(listofRestaurants)

  const[searchtext,setsearchtext] = useState([])

  useEffect(() => 
  {
    fetchdata();
  }, []);

  const fetchdata = async ()=>{
    try{
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
    const jsonData = await data.json();
    console.log(jsonData);
    console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setlistofRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
    catch{
        console.log("Could not fetch the data from the API");
    }
  }
 if(!onlineStatus) return <div className="offline"><h1>Looks like you are offline! please check your internet connection</h1></div>
   return listofRestaurants.length === 0 ? <ShimmerContainer/> : (
    <div className="body">
<div className="body-top">
<div className="filters">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listofRestaurants.filter((res) => {
              return res.info.avgRating >= 4.5;
            });
            setfilteredRestaurants(filteredList);
          }}
        >
          Ratings 4.4+
        </button>
        <button
        onClick={()=>{   
          let vegList = listofRestaurants.filter((res)=>{
            console.log(res?.info?.badges?.imageBadges[0].description)
           return ( res?.info?.badges?.imageBadges[0].description === 'pureveg')
          })
          setfilteredRestaurants(vegList);
        }}
        >Pure Veg</button>
      </div>
      <div className="serachNav">
        <input type="text" className="searchbar" placeholder="Search for restaurant and food"
        value={ searchtext}
        onChange={(e)=>{
          setsearchtext(e.target.value)
        }}/>
        <button className="search" 
        onClick={()=>{
          console.log(searchtext)
          let searchedList = listofRestaurants.filter((res)=>{
           return ( res?.info.name.toLowerCase().includes(searchtext.toLowerCase()) )
          })
          console.log(searchedList)
        setfilteredRestaurants(searchedList)
        }}
        
        >search</button>
      </div> 
</div>
      <div className="cardholder">
        {filteredRestaurants.map((res) => {
          return <Link key={res?.info?.id} to={"/restaurant/" + res?.info?.id} className="link"><RestoCard resdata={res} /></Link>;
          // return <RestoCard key={res?.info?.id} resdata={res} />
        })}
      </div>
    </div>
  );
};

export default Body;
