import axios from "axios";
import { useEffect, useState } from "react";
import PatientCard from "./PatientCard";


const AllPatients = () => {
    const [allPatients, setAllPatients] = useState([]);
    useEffect(()=>{
        const fetchAllPatient = async() =>{
            const result = await axios.get('http://localhost:5000/allPatients')
            setAllPatients(result.data);
            
        }
        fetchAllPatient();
    },[])
    return (
        <div>
            Patients information here
            <div className="grid grid-cols-1 gap-10">
                {
                    allPatients.map(item => <PatientCard key={item._id} item={item}></PatientCard>)
                }
            </div>
        </div>
    );
};

export default AllPatients;