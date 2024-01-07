import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const fetchPatients = () => {
      const getPatients = JSON.parse(localStorage.getItem("patients")) ?? []; // if there is no patients, return an empty array, not null
      setPatients(getPatients);
    };
    fetchPatients();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const newPatients = patients.filter((patient) => patient.id !== id);
    setPatients(newPatients);
  };

  return (
    <div className="container mx-auto mt-8">
      <Header />
      <div className="mt-12 md:flex gap-3 mb-0">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
