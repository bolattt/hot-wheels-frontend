import { useNavigate } from "react-router-dom";

export default function CollectionDetails({ collection, setShowPopup }) {
  const navigate = useNavigate();

  return (
    <div className="pt-20 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={
              collection.image_link ||
              "https://res.cloudinary.com/djwhc7rvy/image/upload/v1676420670/HW_rectangle_tall_2016_guide_7_ub9ejq.jpg"
            }
            alt="car"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            {collection.name}
          </h1>
          {/* <p className="mt-6 mb-2 text-2xl sm:mb-12">
            Quantity: {car.quantity}
          </p>
          <p className=" mb-8 text-2xl sm:mb-12">Series: {car.series} </p>
          <p className=" mb-8 text-2xl sm:mb-12">SKU: {car.sku} </p> */}
          <div className="mt-8 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start ">
            <button
              onClick={() => navigate(`/collections/${collection.id}/edit`)}
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 border border-rounded hover:-translate-y-1 transition"
            >
              Edit
            </button>
            <button
              onClick={() => setShowPopup(true)}
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:-translate-y-1 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
