import React from 'react'
import Certificate from './../assets/certificate-of1.png'
import Design from './../assets/istockphoto-821787126-612x6121.png'
import Human from './../assets/human-resource-vector-concept-logo_579179-18181.png'
import Computer from './../assets/computer-repair-logo-template-computer-pixels-logo-software-development-design-free-vector1.png'
import Img from './../assets/images1.png'
import Stats from './../assets/download3.png'
import careerpage from './../assets/careerpageriya.png'

function Explore() {
  return (
    <div>
      <hr class="w-40 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-blue-500"></hr>
        <br></br>
        <h1 className="text-2xl text-center">
          {" "}
          Explore <span className="text-blue-400">Career </span> Areas
        </h1>
        <br></br>
        <div className="grid grid-cols-3 gap-4 place-items-center">
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg ">
            <img src={Certificate} alt="Group-1" />
            <p> Marketing and Sales</p>
            <p>(CEO)</p>
          </div>
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg ">
            <img
              src={Design}
              alt="Group-1"
            />
            <p> Design and content writing</p>
          </div>
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg">
            <img
              src={Human}
              alt="Group-1"
            />
            <p> Human resources and Management</p>
          </div>
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg">
            <img src={Computer} />
            <p> Finance and Marketing</p>
          </div>
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg">
            <img src={Stats} />
            <p> Software development and engineering</p>
          </div>
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg">
            <img src={Img} alt="Group-1" />
            <p> Product and corporate management</p>
          </div>
        </div>
        <hr class="w-40 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-blue-500"></hr>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">
            {" "}
            Additional <span className="text-blue-400">Perks </span> and{" "}
            <span className="text-blue-400">Benefits </span>
          </h1>
          <img src={careerpage} alt="career page" />
        </div>
        <hr class="w-40 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-blue-500"></hr>
    </div>
  )
}

export default Explore
