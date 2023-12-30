import {useEffect, useState} from "react";

function Form() {

  const [patients, setPatients] = useState([]);

  setPatients(["patient1", "patient2", "patient3"]);

  console.log(patients);

  return (
    <div className="md:w-1/2 lg:w-2/5 px-3">
      <h2 className="font-black text-3xl text-center">Patient Monitoring</h2>
      <p className="text-lg mt-5 text-center">Add Patients and <span className="text-emerald-500 font-bold">Manage their Information</span></p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-10">
        <div className="mb-5">
          <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">
            Pet&apos;s Name
          </label>
          <input
            id="petName"
            type="text"
            placeholder="Enter pet's name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-300"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="ownerName" className="block text-gray-700 uppercase font-bold">
            Owner&apos;s Name
          </label>
          <input
            id="ownerName"
            type="text"
            placeholder="Enter owner's name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-300"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-300"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="releaseDate" className="block text-gray-700 uppercase font-bold">
            Pet&apos;s Release Date
          </label>
          <input
            id="releaseDate"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-300"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            Describe Pet&apos;s Symptoms
          </label>
          <textarea
            id="symptoms"
            placeholder="Enter pet's symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md h-20 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-300"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Add New Patient"
          className="bg-emerald-500 p-3 w-full text-white uppercase font-bold hover:bg-emerald-600 cursor-pointer transition-colors"
        />
      </form>
    </div>
  );
}

export default Form;
