import { useNavigate } from "react-router-dom";

export default function CollectionDetails({ collection, setShowPopup }) {
  const navigate = useNavigate();

  return (
    <div className="pt-20 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
        <div className="xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96">
          <img
            src={
              collection.image_link ||
              "https://res.cloudinary.com/djwhc7rvy/image/upload/v1676420670/HW_rectangle_tall_2016_guide_7_ub9ejq.jpg"
            }
            alt="car"
            className="xl:h-112 2xl:h-128 h-72 object-contain sm:h-80 lg:h-96"
          />
        </div>
        <div className="flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            {collection.name}
          </h1>
          {/* <p className="mt-6 mb-2 text-2xl sm:mb-12">
            Quantity: {car.quantity}
          </p>
          <p className=" mb-8 text-2xl sm:mb-12">Series: {car.series} </p>
          <p className=" mb-8 text-2xl sm:mb-12">SKU: {car.sku} </p> */}
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start ">
            <button
              onClick={() => navigate(`/collections/${collection.id}/edit`)}
              className="border-rounded rounded border px-8 py-3 text-lg font-semibold transition hover:-translate-y-1 dark:bg-violet-400 dark:text-gray-900"
            >
              Edit
            </button>
            <button
              onClick={() => setShowPopup(true)}
              className="rounded border px-8 py-3 text-lg font-semibold transition hover:-translate-y-1 dark:border-gray-100"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
