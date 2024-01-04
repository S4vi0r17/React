import { useState } from "react";
import PropTypes from 'prop-types';
import Alert from "./Alert";

function Form({ patients, setPatients }) {

  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [alert, setAlert] = useState({
    message: '',
    isError: false
  });

  // Generate random id
  const generateId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  const handleSubmit = e => {
    e.preventDefault();

    // Validate using trim(): Delete spaces at the beginning and end of the string
    if (petName.trim() === '' || ownerName.trim() === '' || email.trim() === '' || releaseDate.trim() === '' || symptoms.trim() === '') {
      setAlert({
        message: 'All fields are required',
        isError: true
      });
      return;
    }
    // Other way
    // if ([petName, ownerName, email, releaseDate, symptoms].includes(''))

    setAlert({
      message: 'Patient added successfully',
      isError: false
    });


    setTimeout(() => {
      setAlert({
        message: '',
        isError: false
      });
    }, 3000);

    // Note: Don't use push() method to add new elements to an array in React, because it will mutate the original array. You must use setState() method to add new elements to an array in React.
    setPatients([
      ...patients,
      {
        id: generateId(),
        petName,
        ownerName,
        email,
        releaseDate,
        symptoms
      }
    ]);

    // // Reset form
    // setPetName('');
    // setOwnerName('');
    // setEmail('');
    // setReleaseDate('');
    // setSymptoms('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3">
      <h2 className="font-black text-3xl text-center">Patient Monitoring</h2>
      <p className="text-lg mt-5 text-center">Add Patients and <span className="text-emerald-500 font-bold">Manage their Information</span></p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-10"
        onSubmit={handleSubmit}
      >
        {alert.message && <Alert message={alert.message} isError={alert.isError} />}


        <div className="mb-5">
          <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">
            Pet&apos;s Name
          </label>
          <input
            id="petName"
            type="text"
            placeholder="Enter pet's name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-300"
            value={petName}
            onChange={e => setPetName(e.target.value)}
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
            value={ownerName}
            onChange={e => setOwnerName(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={releaseDate}
            onChange={e => setReleaseDate(e.target.value)}
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
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
          />
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

Form.propTypes = {
  patients: PropTypes.array.isRequired,
  setPatients: PropTypes.func.isRequired
}

export default Form;