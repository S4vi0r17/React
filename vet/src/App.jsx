import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

function App() {

	const [patients, setPatients] = useState([]);
	const [patient, setPatient] = useState({});

	return (
		<div className='container mx-auto mt-8'>
			<Header />
			<div className='mt-12 md:flex gap-3'>
				<Form patients={patients} setPatients={setPatients} />
				<PatientList 
					patients={patients}
					setPatient={setPatient}
				/>
			</div>
		</div>
	)
}

export default App