import React from "react";

const Button = () => {
  return (
    <div className="flex items-center ">
      <input type="button" value="Search Fg"  className="bg-white text-black px-6 py-2 rounded-full m-2" />
      <input type="button" value="Login"  className="bg-white text-black px-6 py-2 m-2" />
      <input type="button" value="Sign up"  className="bg-black text-white px-6 py-2 m-2" />
    </div>
   
  );
};

export default Button;
