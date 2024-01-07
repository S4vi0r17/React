import PropTypes from "prop-types";

function Patient({ patient, setPatient, deletePatient }) {
  const { id, petName, ownerName, email, releaseDate, symptoms } = patient;

  const handleDelete = () => {
    const confirmDelete = confirm(
      `Are you sure you want to delete ${petName}?`
    );
    if (confirmDelete) {
      deletePatient(id);
    }
  };

  return (
    <div className="m-3 mb-8 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Pet&apos;s Name
        <span className="font-normal normal-case">: {petName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner&apos;s Name
        <span className="font-normal normal-case">: {ownerName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email Address
        <span className="font-normal normal-case">: {email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Pet&apos;s Release Date
        <span className="font-normal normal-case">: {releaseDate}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms
        <span className="font-normal normal-case">: {symptoms}</span>
      </p>

      <div className="mt-10 flex justify-between gap-5">
        <button
          type="button"
          className="w-full py-2 px-10 bg-emerald-500 hover:bg-emerald-600 text-white uppercase font-bold rounded-lg"
          onClick={() => setPatient(patient)}
        >
          Edit
        </button>

        <button
          type="button"
          className="w-full py-2 px-10 bg-red-500 hover:bg-red-600 text-white uppercase font-bold rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

Patient.propTypes = {
  patient: PropTypes.object.isRequired,
  setPatient: PropTypes.func.isRequired,
  deletePatient: PropTypes.func.isRequired,
};

export default Patient;
