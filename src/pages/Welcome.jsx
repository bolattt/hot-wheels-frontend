import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <section className="bg-gray-900 text-white w-full h-screen flex items-center bg-[url(https://cdn.discordapp.com/attachments/1008571084225912872/1072801302985322568/arbwar_diecast_cars_c51eaf79-802d-4a3c-adcf-ebec052a2478.png)] bg-cover bg-no-repeat bg-top flex justify-center">
      <Link to="/index">
        <button
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-6 py-4 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
        >
          Start Collecting
        </button>
      </Link>
    </section>
  );
}
