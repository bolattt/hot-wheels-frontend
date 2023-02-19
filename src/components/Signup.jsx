import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";

import { registerWithEmailAndPassword } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  function handleChange(e) {
    const userCopy = { ...user };
    userCopy[e.target.id] = e.target.value;
    setUser(userCopy);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newUser = await registerWithEmailAndPassword(
        user.name,
        user.email,
        user.password
      );
      const auth = getAuth();

      await updateProfile(auth.currentUser, {
        displayName: user.name,
      });
      console.log(newUser);
      console.log("newUser uid ", newUser.uid);
      const res = await axios.post(API + "/users", { uid: newUser.uid });

      console.log("res", res);
      const data = res.data;
      console.log(data);

      console.log("newUser", newUser);
      // if (newUser) {
      //   navigate("/index");
      // }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto  max-w-md">
      <div className="mb-6">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Name
        </label>
        <input
          value={user.name}
          onChange={handleChange}
          type="text"
          id="name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          value={user.email}
          onChange={handleChange}
          type="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="email"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="password"
          required
        />
      </div>
      {/* <div className="mb-6">
        <label
          htmlFor="repeat-password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Repeat password
        </label>
        <input
          type="password"
          id="repeat-password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
      </div> */}

      <button
        type="submit"
        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register new account
      </button>
    </form>
  );
}

export default Signup;
