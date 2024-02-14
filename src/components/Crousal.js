import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Crousal = ({ imageId }) => {
  return (
    <img
      className="w-12/12 h-32 p-2 md:w-10/12 md:h-52"
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
        imageId
      }
    ></img>
  );
};

export default Crousal;
