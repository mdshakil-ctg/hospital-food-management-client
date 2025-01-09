import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getPantry } from "../../components/Api";
import PantryCard from "../../components/PantryCard";


const ManagePantry = () => {
    const [pantry, setPantry] = useState([]);
    
    useEffect(()=>{

        const fetchData = async()=>{
            const data = await getPantry();
            setPantry(data.data)
        }
        
        fetchData()

    },[])


    return (
        <div>
            <Link to='addPantry'><button className="btn btn-primary block">Add New Pantry</button></Link>
            Pantry Info here
            <div>
                {
                    pantry.map(item => <PantryCard key={item._id} item={item}></PantryCard>)
                }
            </div>
        </div>
    );
};

export default ManagePantry;