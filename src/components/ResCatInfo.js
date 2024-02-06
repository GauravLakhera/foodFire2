import { IMG_CDN_URL } from "../constant";
const ResCatInfo = ({ item }) => {
  console.log(item);
  return (
    <div className="flex  justify-between flex-col flex-wrap  my-4">
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="my-2 flex flex-row justify-between  p-2 border-blue-100 border-b-2"
        >
          <div className="flex flex-col">
            <span className="flex mb-1">
              <h1 className="text-xl">{item.card.info.name}</h1>
              <h1 className="mx-2">₹ {item.card.info.price / 100}</h1>
            </span>

            <h1 className="text-sm font-serif">{item.card.info.description}</h1>
          </div>

          <img
            className="w-24 h-24 rounded-sm object-fill md:w-36 md:h-24"
            src={IMG_CDN_URL + item.card.info.imageId}
          ></img>
        </div>
      ))}
    </div>
  );
};

export default ResCatInfo;
