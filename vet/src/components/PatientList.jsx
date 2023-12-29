import Patient from "./Patient"

function PatientList() {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Manage your</h2>
      <p className="text-xl text-center mt-5 mb-7">
        Patients
        <span className="text-emerald-500 font-bold"> & </span>
        Appointments
      </p>
      <div className="md:h-screen md:overflow-y-scroll">
      <Patient/>
      <Patient/>
      <Patient/>
      <Patient/>
      <Patient/>
      <Patient/>
      <Patient/>
      </div>
      
      
    </div>
  )
}

export default PatientList