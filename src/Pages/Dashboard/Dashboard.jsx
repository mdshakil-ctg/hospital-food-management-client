import { useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { FaBook, FaCompress, FaHome, FaUserShield } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiSecretBook } from "react-icons/gi";
import { HiMenuAlt1, HiTemplate } from "react-icons/hi";
import { MdLeakAdd, MdPayment, MdReviews } from "react-icons/md";
import { TbShoppingBagEdit } from "react-icons/tb";
import { NavLink, Outlet } from "react-router";


const Dashboard = () => {
  

//   const { isAdmin, isPending } = useIsAdmin();
const [isAdmin] = useState(true);
  

  
  return (
    <>
      <div className="flex bg-black">
        {/* dashboard for mini screen */}
        <div className="bg-[#1C2A35] text-white block md:hidden min-h-screen fixed w-[70px]">
          {/* profile display */}
          <div className="bg-yellow-400 w-12 h-12 mx-auto my-6 rounded-2xl flex">
           
          </div>
          {/* dashboard navigation */}
          <div>
            {isAdmin && <ul className="p-3">
              <NavLink to="/dashboard/adminHome">
                <li className="flex items-center justify-center mb-3 px-1 py-1">
                  <AiFillDashboard className="text-2xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/addItem">
                <li className="flex items-center justify-center mb-3 px-2 py-1">
                  <MdLeakAdd className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/manageItems">
                <li className="flex items-center justify-center  mb-3 px-2 py-1">
                  <TbShoppingBagEdit className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/manageBookings">
                <li className="flex items-center justify-center  mb-3 px-2 py-1">
                  <GiSecretBook className="text-4xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/allUsers">
                <li className="flex items-center justify-center mb-3 px-2 py-1">
                  <FaUserShield className="text-4xl" />
                </li>
              </NavLink>
            </ul> }
            {!isAdmin && 
            <ul className="p-3">
              <NavLink to="/dashboard/user-home">
                <li className="flex items-center justify-center mb-3 px-2 py-1">
                  <AiFillDashboard className="text-2xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/user-reservation">
                <li className="flex items-center justify-center mb-3 px-2 py-1">
                  <FaCompress className="text-2xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/payment-history">
                <li className="flex items-center justify-center mb-3 px-2 py-1">
                  <MdPayment className="text-2xl" />
                </li>
              </NavLink>
              <NavLink to="/dashboard/myCart">
                <li className="flex items-center justify-center mb-3 px-2 py-1">
                  <FaCartShopping className="text-2xl" />
                  <span className="">
                  </span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/addReview">
                <li className="flex items-center justify-center mb-3 px-2 py-1">
                  <MdReviews className="text-2xl" />
                </li>
              </NavLink>

              <NavLink to="myBooking">
                <li className="flex items-center justify-center mb-3 px-2 py-1">
                  <FaBook className="text-2xl" />
                </li>
              </NavLink>
            </ul>}
          </div>
          <div className="border border-yellow-600 mx-1"></div>
          <div>
            <ul className="p-3">
              <NavLink to="/">
                <li className="flex items-center justify-center mb-3 px-2 py-1">
                  <FaHome className="text-2xl" />
                </li>
              </NavLink>
              <NavLink to="/menu">
                <li className="flex items-center justify-center mb-3 px-2 py-1">
                  <HiMenuAlt1 className="text-2xl" />
                </li>
              </NavLink>
              <NavLink to="/shop/soup">
                <li className="flex items-center justify-center mb-3 px-2 py-1">
                  <HiTemplate className="text-2xl" />
                </li>
              </NavLink>
             
            </ul>
          </div>
        </div>
        
        {/* //dashboard content */}
        <div className="md:w-[230px] lg:w-[300px] min-h-screen fixed  bg-[#1C2A35] text-white p-2 hidden md:block">
          <div>
            <div className="bg-yellow-400 w-16 h-16 mx-auto mt-8 mb-2 rounded-2xl flex">
              
            </div>
            
          </div>
          {isAdmin ? (
            <ul className="p-8">
              <NavLink to="/dashboard/adminHome">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <AiFillDashboard className="text-xl" />
                  <span className="ml-2">dashboard</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/addPatient">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <MdLeakAdd className="text-xl" />
                  <span className="ml-2">Add Patient</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/managePantry">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <TbShoppingBagEdit className="text-xl" />
                  <span className="ml-2">manage pantry</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/manageBookings">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <GiSecretBook className="text-xl" />
                  <span className="ml-2">manage bookings</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/allPatient">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <FaUserShield className="text-xl" />
                  <span className="ml-2">all Patients</span>
                </li>
              </NavLink>
            </ul>
          ) : (
            <ul className="p-8">
              <NavLink to="/dashboard/user-home">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <AiFillDashboard className="text-xl" />
                  <span className="ml-2">Dashboard</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/user-reservation">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <FaCompress className="text-xl" />
                  <span className="ml-2">Reservation</span>
                </li>
              </NavLink>
              <NavLink to="/dashboard/payment-history">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <MdPayment className="text-xl" />
                  <span className="ml-2">payment</span>
                </li>
              </NavLink>
              
              <NavLink to="/dashboard/addReview">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <MdReviews className="text-xl" />
                  <span className="ml-2">Add review</span>
                </li>
              </NavLink>

              <NavLink to="myBooking">
                <li className="flex items-center font-medium capitalize mb-1 px-2 py-1">
                  <FaBook className="text-xl" />
                  <span className="ml-2">My Bookings</span>
                </li>
              </NavLink>
            </ul>
          )}

          <div className="border border-yellow-600 mx-4"></div>

          <div>
            <ul className="p-8">
              <NavLink to="/">
                <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300  capitalize px-2 py-1">
                  <FaHome className="text-xl" />
                  <span className="ml-2">home</span>
                </li>
              </NavLink>
              <NavLink to="/menu">
                <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300  capitalize px-2 py-1">
                  <HiMenuAlt1 className="text-xl" />
                  <span className="ml-2">menu</span>
                </li>
              </NavLink>
              <NavLink to="/shop/soup">
                <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300  capitalize px-2 py-1">
                  <HiTemplate className="text-xl" />
                  <span className="ml-2">gallary</span>
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="flex items-center font-medium hover:bg-black hover:rounded-lg hover:text-yellow-300 capitalize px-2 py-1">
                  <FaUserShield className="text-xl" />
                  <span className="ml-2">contact</span>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        {/* outlet content */}
        <div className="flex-1 bg-black min-h-screen text-slate-200 ml-[70px] md:ml-[230px] lg:ml-[300px]">
          
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
