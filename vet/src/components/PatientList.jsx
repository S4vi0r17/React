import PropTypes from 'prop-types';
import Patient from "./Patient"

function PatientList({ patients }) {
  // console.log(patients);
  // {patients} is the same as props.patients, is an array of objects

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Manage your</h2>
      <p className="text-xl text-center mt-5 mb-7">
        Patients
        <span className="text-emerald-500 font-bold"> & </span>
        Appointments
      </p>
      <div className="md:h-screen md:overflow-y-scroll">

        {
          patients.map(patient => {
            // console.log(patient);
            return <Patient key={patient.id} patient={patient} />
          })
        }

      </div>
    </div>
  )
}

PatientList.propTypes = {
  patients: PropTypes.array.isRequired,
};

export default PatientList