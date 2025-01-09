import  { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

const DietChartForm = () => {
    const location = useLocation()
    const patientId = location.state.patientId;
    const [dietChart, setDietChart] = useState({
      morning: { meal: "", ingredients: "", instructions: "" },
      evening: { meal: "", ingredients: "", instructions: "" },
      night: { meal: "", ingredients: "", instructions: "" },
    });
    
  
      const handleChange = (e, time, field) => {
        setDietChart((prev) => ({
          ...prev,
          [time]: {
            ...prev[time],
            [field]: e.target.value,
          },
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await axios.put(
            `http://localhost:5000/patients/${patientId}/diet-chart`,
            { dietChart }
          );
          alert("Diet chart updated successfully!");
        } catch (error) {
          console.error("Error updating diet chart:", error);
          alert("Failed to update diet chart.");
        }
      };
    
    return (
        <form onSubmit={handleSubmit}>
      <h3>Diet Chart for Patient</h3>

      {["morning", "evening", "night"].map((time) => (
        <div key={time}>
          <h4>{time.charAt(0).toUpperCase() + time.slice(1)} Meal</h4>
          <div>
            <label>Meal:</label>
            <input
              type="text"
              value={dietChart[time].meal}
              onChange={(e) => handleChange(e, time, "meal")}
              placeholder={`Enter ${time} meal`}
            />
          </div>
          <div>
            <label>Ingredients:</label>
            <input
              type="text"
              value={dietChart[time].ingredients}
              onChange={(e) => handleChange(e, time, "ingredients")}
              placeholder="Enter ingredients, separated by commas"
            />
          </div>
          <div>
            <label>Instructions:</label>
            <textarea
              value={dietChart[time].instructions}
              onChange={(e) => handleChange(e, time, "instructions")}
              placeholder="Enter specific instructions"
            />
          </div>
        </div>
      ))}

      <button type="submit">Save Diet Chart</button>
    </form>
    );
};

export default DietChartForm;