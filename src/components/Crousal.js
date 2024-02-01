const Crousal = ({ imageId, id }) => {
  return (
    <>
      <div className="flex ">
        <img className=""
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
            imageId
          }
        ></img>
      </div>
    </>
  );
};

export default Crousal;
