import "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData({
      fulllName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
    setfirstName("");
    setlastName("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className=" w-20 h-12  mb-5"
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvNTUwOVwvNmNmOGVmM2YzMjFkMTA3YThmZGVjNjY1NjJlMmVmMzctMTYyMDM3Nzc0OC5haSJ9:postmates:9KZWqmYNXpeGs6pQy4UCsx5EL3qq29lhFS6e4ZVfQrs?width=2400"
          alt=""
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-base font-medium mb-2">{"What's your Name?"}</h3>
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              value={firstName}
              className="bg-[#eeeeee] py-4 px-2  rounded w-1/2 text-base placeholder:text-sm outline-none"
              required
              placeholder="Your First Name"
            />

            <input
              type="text"
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              value={lastName}
              className="bg-[#eeeeee] py-4 px-2  w-1/2 rounded text-base placeholder:text-sm outline-none"
              required
              placeholder="Your Last Name "
            />
          </div>

          <h3 className="text-base font-medium mb-2">{"What's your Email?"}</h3>

          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="bg-[#eeeeee] py-4 px-2 mb-5 rounded w-full text-base placeholder:text-sm outline-none"
            required
            placeholder="email@example.com"
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>

          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="bg-[#eeeeee] py-4 px-2 mb-5 font-semibold rounded w-full text-base placeholder:text-sm outline-none"
            required
            placeholder="Password"
          />

          <button className="bg-[#111] text-white rounded-2xl py-4 px-2 mb-3  w-full ">
            Register
          </button>
        </form>
        <p className="text-center ">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          By proceeding you consent to get messages, including by automated
          means, from Uber and its affilates to the email provided
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
