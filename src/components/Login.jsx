import { useState } from "react";
import { logInWithEmailAndPassword, signInWithGoogle } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [firebaseUser, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  function handleChange(e) {
    const userCopy = { ...user };
    userCopy[e.target.id] = e.target.value;
    setUser(userCopy);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    try {
      const newUser = await logInWithEmailAndPassword(
        user.email,
        user.password
      );
      console.log("newUser", newUser);

      navigate("/index");
    } catch (error) {
      console.log(error);
    }
  }
  async function googleLogin() {
    try {
      await signInWithGoogle();
      navigate("/index");
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log(firebaseUser);
  return (
    <form onSubmit={handleSubmit} className="mx-auto  max-w-md">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          value={user.email || ""}
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

      <div className="grid grid-cols-2 gap-3">
        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login with Email
        </button>

        <button
          onClick={googleLogin}
          type="submit"
          className=" inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login with Google
        </button>
      </div>
    </form>
  );
}

export default Login;
