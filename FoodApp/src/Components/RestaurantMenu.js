import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerContainer from "./ShimmerContainer";
import { useParams } from "react-router-dom";


const RestaurantMenu = ()=> {
const {resId} = useParams();
  let resInfo = useRestaurantMenu(resId);
  if (resInfo === null) <ShimmerContainer />;
  else {
    const { name, cloudinaryImageId, costForTwoMessage, cuisines } =
      resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    return (
      <div className="menu"> 
        <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
        <br />
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwoMessage}</h4>
        <br />
        <h2>Menu</h2>
        <ul  className="menu_itmes">
          {itemCards.map((res) => {
         return (
            <li key={res?.card?.info?.id}>
            {" "}
            {res?.card?.info?.name} - Rs-{res?.card?.info?.price / 100 || res?.card?.info?.defaultPrice / 100}{" "}
          </li>
         )
          })}
        </ul>
      </div>
    );
  }
}

export default RestaurantMenu;
