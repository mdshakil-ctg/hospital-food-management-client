import { useNavigate } from "react-router";

const PatientCard = ({ item }) => {
  const navigate = useNavigate();

  const {
    name,
    age,
    diseases,
    allergies,
    roomNumber,
    bedNumber,
    floorNumber,
    gender,
    emergencyContact,
    _id,
    dietChart,
  } = item;

  const handleDietchart = (_id) => {
    navigate('diet-chart-form', { state: { patientId: _id } });
  };

  return (
    <div className="card bg-slate-300 text-black shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Diseases: {diseases}</p>
        <p>Allergies: {allergies}</p>
        <p>Room Number: {roomNumber}</p>
        <p>Bed Number: {bedNumber}</p>
        <p>Floor Number: {floorNumber}</p>
        <p>Gender: {gender}</p>
        <p>Emergency Contact: {emergencyContact}</p>

        {/* Dynamic Diet Chart Table */}
        {dietChart && (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Morning</th>
                  <th>Evening</th>
                  <th>Night</th>
                </tr>
              </thead>
              <tbody>
                {/* Row for Meal */}
                <tr>
                  <th>Meal</th>
                  <td>{dietChart.morning?.meal || "N/A"}</td>
                  <td>{dietChart.evening?.meal || "N/A"}</td>
                  <td>{dietChart.night?.meal || "N/A"}</td>
                </tr>
                {/* Row for Ingredients */}
                <tr>
                  <th>Ingredients</th>
                  <td>{dietChart.morning?.ingredients || "N/A"}</td>
                  <td>{dietChart.evening?.ingredients || "N/A"}</td>
                  <td>{dietChart.night?.ingredients || "N/A"}</td>
                </tr>
                {/* Row for Instructions */}
                <tr>
                  <th>Instructions</th>
                  <td>{dietChart.morning?.instructions || "N/A"}</td>
                  <td>{dietChart.evening?.instructions || "N/A"}</td>
                  <td>{dietChart.night?.instructions || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="card-actions justify-end">
          <button
            onClick={() => handleDietchart(_id)}
            className="btn btn-primary"
          >
            DietChart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
