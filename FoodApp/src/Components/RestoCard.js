import { CDN_URL } from "../utils/const.js";

const RestoCard = (props) => {
  // {console.log(props)}
  const { resdata } = props;
  const { name, cloudinaryImageId, cuisines, avgRating } = resdata?.info;

return (
    <div className="card">
        <img
          alt="dish_logo"
          className="dish_logo"
          src={CDN_URL + cloudinaryImageId}
        />
  
      <div className="card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <p>{resdata.info.sla.deliveryTime} minutes</p>
      </div>
    </div>
  );
};

export default RestoCard;
