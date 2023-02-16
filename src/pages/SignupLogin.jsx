import { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import FormTab from "../components/FormTab";

function SignupLogin() {
  const [activeTab, setActiveTab] = useState("login");
  const tab = {
    header1: "Signup",
    header2: "Login",
    class1: "signup",
    class2: "login",
  };

  return (
    <div className="mx-auto max-w-md pt-32">
      <FormTab activeTab={activeTab} setActiveTab={setActiveTab} tab={tab} />
      {activeTab === "login" ? <Login /> : <Signup />}
    </div>
  );
}

export default SignupLogin;
