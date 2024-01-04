import PropTypes from 'prop-types';

function Patient({ patient: { petName, ownerName, email, releaseDate, symptoms } }) {

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

    </div>
  )
}

Patient.propTypes = {
  patient: PropTypes.object.isRequired,
};

export default Patient