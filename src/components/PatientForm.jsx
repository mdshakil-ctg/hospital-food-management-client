
import { addPatient } from "./Api";
import { useForm } from "react-hook-form";


const PatientForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm()

    const handleFormSubmit = async (data) => {
        
        try {
          await addPatient(data);
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
            {/* patient name */}
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
          {/* patient diseases */}

          <div className="flex flex-col mb-2">
            {errors.diseases ? 
            <label htmlFor="diseases" className="text-red-500 mb-2">
            Diseases is required
          </label>
            :
            <label htmlFor="diseases" className="text-gray-300 mb-2">
              Diseases
            </label>
            }
            <input
            {...register("diseases", { required: 'diseases is required' })}
              type="text"
              id="diseases"
              className="px-4 py-2 bg-slate-800 text-white placeholder:text-slate-400   rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="diseases title here"
            />
          </div>
          {/* allergies */}

          <div className="flex flex-col mb-2">
            {errors.allergies ? 
            <label htmlFor="allergies" className="text-red-500 mb-2">
            Allergies is required
          </label>
            :
            <label htmlFor="allergies" className="text-gray-300 mb-2">
              Allergies
            </label>
            }
            <input
            {...register("allergies", { required: 'allergies is required' })}
              type="text"
              id="allergies"
              className="px-4 py-2 bg-slate-800 text-white placeholder:text-slate-400   rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Allergies title here"
            />
          </div>
          {/* roomNumber */}

          <div className="flex flex-col mb-2">
            {errors.roomNumber ? 
            <label htmlFor="roomNumber" className="text-red-500 mb-2">
            roomNumber is required
          </label>
            :
            <label htmlFor="roomNumber" className="text-gray-300 mb-2">
              Room Number
            </label>
            }
            <input
            {...register("roomNumber", { required: 'roomNumber is required' })}
              type="text"
              id="roomNumber"
              className="px-4 py-2 bg-slate-800 text-white placeholder:text-slate-400   rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Room Number here"
            />
          </div>
          {/* bedNumber */}

          <div className="flex flex-col mb-2">
            {errors.bedNumber ? 
            <label htmlFor="bedNumber" className="text-red-500 mb-2">
            bed Number is required
          </label>
            :
            <label htmlFor="bedNumber" className="text-gray-300 mb-2">
             Bed Number
            </label>
            }
            <input
            {...register("bedNumber", { required: 'bedNumber is required' })}
              type="text"
              id="bedNumber"
              className="px-4 py-2 bg-slate-800 text-white placeholder:text-slate-400   rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Bed Number here"
            />
          </div>
          {/* floorNumber */}

          <div className="flex flex-col mb-2">
            {errors.floorNumber ? 
            <label htmlFor="floorNumber" className="text-red-500 mb-2">
            Floor Number is required
          </label>
            :
            <label htmlFor="floorNumber" className="text-gray-300 mb-2">
             Floor Number
            </label>
            }
            <input
            {...register("floorNumber", { required: 'floorNumber is required' })}
              type="number"
              id="floorNumber"
              className="px-4 py-2 bg-slate-800 text-white placeholder:text-slate-400   rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Floor Number here"
            />
          </div>
          {/* age */}

          <div className="flex flex-col mb-2">
            {errors.age ? 
            <label htmlFor="age" className="text-red-500 mb-2">
            Age is required
          </label>
            :
            <label htmlFor="age" className="text-gray-300 mb-2">
            Age
            </label>
            }
            <input
            {...register("age", { required: 'age is required' })}
              type="number"
              id="age"
              className="px-4 py-2 bg-slate-800 text-white placeholder:text-slate-400   rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Age here"
            />
          </div>
          {/* gender */}

          <div className="flex flex-col">
              <label htmlFor="category" className="text-gray-300 mb-4">
               Select Gender
              </label>
              <select
              {...register("gender", { required: "gender is required" })}
                id="gender"
                className="px-4 pt-[12px] pb-[11px] bg-slate-800 text-white  rounded-t-md focus:outline-none focus:rounded-t-md focus:text-white focus:border-yellow-500"
              >
                <option  value="male">
                  Male
                </option>
                <option  value="female">
                  Female
                </option>
                </select>
            </div>

             {/* contactInfo */}

          <div className="flex flex-col mb-2">
            {errors.age ? 
            <label htmlFor="contactInfo" className="text-red-500 mb-2">
            Contact Info is required
          </label>
            :
            <label htmlFor="contactInfo" className="text-gray-300 mb-2">
            Contact Info
            </label>
            }
            <input
            {...register("age", { required: 'contactInfo is required' })}
              type="text"
              id="contactInfo"
              className="px-4 py-2 bg-slate-800 text-white placeholder:text-slate-400   rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="Contact Info here"
            />
          </div>
         
             {/* emergencyContact */}

          <div className="flex flex-col mb-2">
            {errors.emergencyContact ? 
            <label htmlFor="emergencyContact" className="text-red-500 mb-2">
            Emergency Contact is required
          </label>
            :
            <label htmlFor="emergencyContact" className="text-gray-300 mb-2">
            Emergency Contact
            </label>
            }
            <input
            {...register("emergencyContact", { required: 'emergencyContact is required' })}
              type="text"
              id="emergencyContact"
              className="px-4 py-2 bg-slate-800 text-white placeholder:text-slate-400   rounded-md focus:outline-none focus:border-yellow-500"
              placeholder="emergencyContact here"
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

export default PatientForm;