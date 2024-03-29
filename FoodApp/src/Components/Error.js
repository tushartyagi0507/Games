
import App from "./script.js";
import { useRouteError } from "react-router-dom";

const Error = ()=>{
  const err = useRouteError();
  console.log(err);
    return (
<div className="error-page">
<div className="error">
        <img className="error-image"
        src="https://b.zmtcdn.com/images/z404x2.png?output-format=webp"/>
      <div className="adj">
      <p>
        This is a <b>{err.status}: {err.statusText} </b> and we think it's fairly clear
You aren't going to find what you're looking for here
But we know you're hungry, so don't fret or rage
Hit that big red button to go back to our homepage
        </p>
        <br/>
        <button className="back"
        onClick={()=>{
            console.log("clicked")
            window.location.href = "/";
        }}
        >Go Back</button>
      </div>
        </div>
</div>
    )
}

export default Error