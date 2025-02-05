import React from "react";
import email from "../assets/email.svg";
import password from "../assets/password.svg";
import { FcGoogle } from "react-icons/fc";
import facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-primary ">
      <div className="flex-1 h-screen bg-[url(./assets/Login.png)] bg-cover bg-center bg-no-repeat hidden md:block">
        <div className="flex justify-center">
          <blockquote className="text-xl text-gray-600 mt-16">
            The only way to   
            <span className="text-purple-600 font-semibold">
             do great work
            </span>{" "}
            is to <br />
            <span className="text-purple-600 font-semibold">love what </span>
            you do
            <p className="text-end">- elon musk</p>
          </blockquote>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <form action="" className="space-y-4 w-full min-w-72 md:w-1/3">
          <h1 className="text-md mb-5 font-semibold md:text-2xl">Sign Up</h1>

          {/* input email */}
          <div className="flex items-center border rounded-md px-2 py-1 border-[#E0E2E9]">
            <img src={email} alt="" className=" w-4 h-4" />
            <input
              type="email"
              placeholder="Your email"
              className="ml-2 outline-none text-sm"
            />
          </div>

          {/* input password */}
          <div className="flex items-center border rounded-lg px-2 py-1 border-[#E0E2E9]">
            <img src={password} alt="" className=" w-4 h-4" />
            <input
              type="password"
              placeholder="Your password"
              className="ml-2 outline-none text-sm"
            />
          </div>
          {/* Repeat password */}
          <div className="flex items-center border rounded-lg px-2 py-1 border-[#E0E2E9]">
            <img src={password} alt="" className=" w-4 h-4" />
            <input
              type="password"
              placeholder="Repeat Password"
              className="ml-2 outline-none text-sm"
            />
          </div>

          <button
            type="button"
            className="bg-primary w-full rounded-lg px-2 py-1 text-white cursor-pointer"
          >
            Sign Up
          </button>
          <p className="text-end text-sm text-primary cursor-pointer">Forgot password?</p>
          <div className="flex items-center my-4 before:border-t before:flex-1 before:border-[#E0E2E9] after:border-t after:flex-1 after:border-[#E0E2E9]">
            <p className="mx-3 text-center">Or</p>

            {/* other login formats */}
          </div>
          <div className="flex justify-between">
            <div className="flex border border-[#E0E2E9] items-center px-3 py-2 rounded-lg hover:bg-gray-100 ">
              <FcGoogle className="w-5 h-5" />
              <button type="button" className="px-2 cursor-pointer">
                Google
              </button>
            </div>
            <div className="flex border border-[#E0E2E9] items-center px-3 py-2 rounded-lg hover:bg-gray-100 ">
              <img src={facebook} alt="facebook icon" className="w-5 h-5" />
              <button type="button" className=" px-2 cursor-pointer ">
                Facebook
              </button>
            </div>
          </div>
          <p className="text-sm">
          Already have an account? <Link to="/"><span className="text-primary">Log In</span></Link> 
          </p>
        </form>
      </div>

      <div></div>
    </div>
  );
};

export default Signup;
