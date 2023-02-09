export default function NewCarForm() {
  return (
    <form>
      <h2 className="text-lg font-bold ">Add A New Car</h2>
      <div className="mb-6">
        <label
          for="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Hotwheels Name
        </label>
        <input
          type="name"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          for="quantity"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Quantity"
          required
        />
      </div>

      <div className="mb-6">
        <label
          for="year"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Released Year
        </label>
        <input
          type="year"
          id="year"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Released Year"
        />
      </div>
      <div className="mb-6">
        <label
          for="year"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Color
        </label>
        <input
          type="text"
          id="color"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Color"
        />
      </div>
      <div className="mb-6">
        <label
          for="image-link"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Image Link
        </label>
        <input
          type="text"
          id="image-line"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Image Link"
        />
      </div>
      <div className="mb-6">
        <label
          for="collection-id"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Collection
        </label>
        <input
          type="number"
          id="collection-id"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Collection"
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          for="terms"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register new account
      </button>
    </form>
  );
}
