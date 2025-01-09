
/* eslint-disable react/prop-types */
const PantryCard = ({item}) => {

    const {name, contact, location} = item;

    return (
        <div className="card bg-slate-400 text-black w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Stuff Name: {name}</h2>
    <p>Contact Info: {contact}</p>
    <p>Location: {location}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
    );
};

export default PantryCard;
/* eslint-enable react/prop-types */