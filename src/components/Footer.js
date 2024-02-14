const Footer = () => {
  return (
    <div className="bg-black h-72 text-white">
      <div className="flex flex-row  ">
        <div className=" m-5 mt-10 flex flex-col content-center w-5/12 p-2">
          <h1 className="font-semibold text-xl mb-3">About us</h1>
          <div className="ml-6">
            <h1 className="font-thin from-neutral-300 m-1">
              Name : Gaurav Lakhera
            </h1>
            <h1 className="font-thin from-neutral-300 m-1">
              Email : gauravlakhera01@gmail.com
            </h1>
            <h1 className="font-thin from-neutral-300 m-1">
              Linkdin : linkdin.com@gaurav_lakhera
            </h1>
            <h1 className="font-thin from-neutral-300 m-1">
              Github : guthub.com/gaurav_lakhera
            </h1>
          </div>
        </div>
        <div className=" flex flex-col content-center w-5/12 p-2  mt-10 m-5">
          <h1 className="font-semibold text-xl mb-3">Tech Used </h1>
          <div className="ml-6">
            <h1 className="font-thin from-neutral-300 m-1">React js </h1>
            <h1 className="font-thin from-neutral-300 m-1">Tailwind CSS</h1>
            <h1 className="font-thin from-neutral-300 m-1">Redux </h1>
            <h1 className="font-thin from-neutral-300 m-1">Javascript </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
