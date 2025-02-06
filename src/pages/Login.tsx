import React, { useState, ChangeEvent, FormEvent } from "react";
import email from "../assets/email.svg";
import password from "../assets/password.svg";
import { FcGoogle } from "react-icons/fc";
import facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}
interface FormErrors {
  email?: string;
  password?: string;
}

const Login = () => {
  const [data, setData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // function to validate the form
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!data.password.trim()) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // function to handle the input form
  const printValues = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateForm();
    setErrors(validationError);
    console.log(errors);
    if (Object.keys(validationError).length === 0) {
      console.log("Form submitted successfully:", data);
    }
  };
  // input value change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-primary ">
      <div className="md:w-1/2 flex justify-center items-center">
        <form
          action=""
          className="space-y-3 w-full min-w-72 md:w-1/3"
          onSubmit={printValues}
        >
          <h1 className="text-md mb-5 font-semibold md:text-2xl">Log In</h1>

          {/* input email */}
          <div>
            <div className="flex items-center border rounded-md px-2 py-1 border-[#E0E2E9]">
              <img src={email} alt="" className=" w-4 h-4" />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Your email"
                className="ml-2 outline-none text-sm"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm italic">{errors.email}</p>
            )}
          </div>

          {/* input password */}
          <div>
            <div className="flex items-center border rounded-lg px-2 py-1 border-[#E0E2E9]">
              <img src={password} alt="" className=" w-4 h-4" />
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Your password"
                className="ml-2 outline-none text-sm"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm italic">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary w-full rounded-lg px-2 py-1 text-white cursor-pointer"
          >
            Log In
          </button>
          <p className="text-end text-sm text-primary cursor-pointer">
            Forgot password?
          </p>
          <div className="flex items-center my-4 before:border-t before:flex-1 before:border-[#E0E2E9] after:border-t after:flex-1 after:border-[#E0E2E9]">
            <p className="mx-3 text-center">Or</p>

            {/* other login formats */}
          </div>
          <div className="flex justify-between">
            <div className="flex border border-[#E0E2E9] items-center px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <FcGoogle className="w-5 h-5" />
              <button type="button" className="px-2">
                Google
              </button>
            </div>
            <div className="flex border border-[#E0E2E9] items-center px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <img src={facebook} alt="facebook icon" className="w-5 h-5" />
              <button type="button" className=" px-2 ">
                Facebook
              </button>
            </div>
          </div>
          <p className="text-sm">
            Don’t have an account?{" "}
            <Link to="signup">
              <span className="text-primary">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
      <div className="flex-1 h-screen bg-[url(./assets/Login.png)] bg-cover bg-center bg-no-repeat hidden md:block">
        <div className="flex justify-center">
          <blockquote className="text-xl text-gray-600 mt-16">
            The future belongs to those who <br />
            <span className="text-purple-600 font-semibold">believe</span> in
            the{" "}
            <span className="text-purple-600 font-semibold">
              beauty of their dreams.
            </span>
            <p className="text-end">- elon musk</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Login;
