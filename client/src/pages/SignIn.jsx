import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

const SignIn = () => {
  // create a formData state
  const [formData, setFormData] = useState({});

  // get the loading and error state from the user slice
  const { loading, error } = useSelector((state) => state.user);

  // create a navigate function
  const navigate = useNavigate();
  // create a dispatch function
  const dispatch = useDispatch();

  // create a handleChange function to update the formData state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // create a handleSubmit function to sign in the user
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the page from reloading
    try {
      dispatch(signInStart()); // dispatch the signInStart action
      // make a POST request to the server
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // get the response data
      const data = await res.json();

      // if the response is unsuccessful, dispatch the signInFailure action
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      // if the response is successful, dispatch the signInSuccess action
      dispatch(signInSuccess(data));
      navigate("/"); // navigate to the home page
    } catch (error) {
      // if an error occurs, dispatch the signInFailure action
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className=" text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className=" border p-3 rounded-lg"
          id="email"
          onChange={handleChange} 
        />
        <input
          type="password"
          placeholder="password"
          className=" border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className=" bg-sky-400 text-white p-3 rounded-sm 
        uppercase hover:opacity-90 disabled:opacity-70"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account? </p>
        <Link to={"/sign-up"}>
          <span className=" text-sky-500 hover:opacity-90">Sign Up</span>
        </Link>
      </div>
      {error && <p className=" text-red-500 mt-3">{error}</p>}
    </div>
  );
};
export default SignIn;
