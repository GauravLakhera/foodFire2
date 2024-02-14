const Shimmer = () => {
  return (
    <div className="flex flex-col border m-3 shadow-xl p-1 w-52 bg-gray-300 ">
      {/* img */}
      <div className="w-full h-56 object-cover rounded-t-lg  bg-gray-100 "></div>
      <h2 className="text-lg font-semibold text-center p-2">Restaurent Name</h2>
      <h3 className="overflow-hidden text-ellipsis whitespace-nowrap m-2">
        cuisines.join
      </h3>

      <div className="flex justify-around items-center p-2 border">
        <h1 className="text-ellipsis text-sm font-serif">time</h1>

        <div className="flex justify-center items-center font-serif">
          <h4>Rating</h4>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
