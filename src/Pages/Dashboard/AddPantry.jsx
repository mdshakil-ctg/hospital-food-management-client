import { useForm } from "react-hook-form";
import { addPantry } from "../../components/Api";
const AddPantry = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();

       const handleFormSubmit = async (data) => {
              
              try {
                await addPantry(data);
                alert("Patient added successfully!");
                reset();
              } catch (error) {
                alert("Error adding patient", {error});
              }
            };
    return (
        <div className="flex ">
        <div className="min-h-screen w-full mb-0 m-1 md:m-6 bg-[#1C1C1C] text-white p-5 md:p-16 pt-0">
          {/* Form Title */}
          <div className="text-white">
          
          </div>
         
          <form onSubmit={handleSubmit(handleFormSubmit)}>
              {/* staff name */}
            <div className="flex flex-col mb-2">
              {errors.name ? 
              <label htmlFor="name" className="text-red-500 mb-2">
              Name is required
            </label>
              :
              <label htmlFor="name" className="text-gray-300 mb-2">
                Patient Name
              </label>
              }
              <input
              {...register("name", { required: 'Name is required' })}
                type="text"
                id="name"
                className="px-4 py-2 bg-slate-800 text-white placeholder:text-slate-400   rounded-md focus:outline-none focus:border-yellow-500"
                placeholder="Patient name here"
              />
            </div>
              {/* Contact info */}
            <div className="flex flex-col mb-2">
              {errors.contact ? 
              <label htmlFor="contact" className="text-red-500 mb-2">
              Contact Info is required
            </label>
              :
              <label htmlFor="contact" className="text-gray-300 mb-2">
                Contact Info
              </label>
              }
              <input
              {...register("contact", { required: 'contact is required' })}
                type="text"
                id="contact"
                className="px-4 py-2 bg-slate-800 text-white placeholder:text-slate-400   rounded-md focus:outline-none focus:border-yellow-500"
                placeholder="Contact Info here"
              />
            </div>
              {/* location */}
            <div className="flex flex-col mb-2">
              {errors.location ? 
              <label htmlFor="location" className="text-red-500 mb-2">
              location is required
            </label>
              :
              <label htmlFor="location" className="text-gray-300 mb-2">
                Location
              </label>
              }
              <input
              {...register("location", { required: 'location is required' })}
                type="text"
                id="location"
                className="px-4 py-2 bg-slate-800 text-white placeholder:text-slate-400   rounded-md focus:outline-none focus:border-yellow-500"
                placeholder="location Info here"
              />
            </div>               
            <div className="flex justify-center md:justify-end">
            
              <button type="submit" className="btn btn-secondary" >submit</button>
            
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddPantry;