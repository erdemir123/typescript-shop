import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Alert from "../component/Alert";
import { BasketContext } from "../context/CartContext";

interface ıHandleChange {
  event: React.ChangeEvent<HTMLInputElement>;
}
const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, setIsLoggedIn,setAlert} = useContext(BasketContext);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/");
  }
  console.log(user);
  return (
    <div className="flex items-center justify-center h-[93vh]">
      <form className="w-[60%]" onSubmit={(e) => handleSubmit(e)}>
        <label className="flex flex-col gap-[20px] font-bold">
          <div>
            <span className="block text-sm font-medium text-slate-700">
              Username
            </span>
            <input
              type="text"
              required
              placeholder="Enter Your UserName"
              name="userName"
              onChange={(event) => handleChange(event)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
     
    "
            />
          </div>
          <div>
            <span className="block text-sm font-medium text-slate-700">
              E-mail
            </span>
            <input
              type="email"
              name="email"
              placeholder="Enter Your  E-mail"
              onChange={(event) => handleChange(event)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </div>
          <div>
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={(event) => handleChange(event)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
     
     
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </div>
        </label>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-slate-500 w-[100px] h-[45px] border rounded-full border-sky-200 font-bold text-white  mt-4"
          >
            Login
          </button>
        </div>
      </form>
     
    </div>
  );
};

export default Login;
