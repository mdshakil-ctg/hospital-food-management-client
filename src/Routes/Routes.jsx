import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PatientForm from "../components/PatientForm";
import AllPatients from "../components/AllPatients";
import DietChartForm from "../components/DietChartForm";
import ManagePantry from "../Pages/Dashboard/ManagePantry";
import AddPantry from "../Pages/Dashboard/AddPantry";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'addPatient',
                element: <PatientForm></PatientForm>
            },
            {
                path:'allPatient',
                element: <AllPatients></AllPatients>
            },
            {
                path: 'allPatient/diet-chart-form',
                element: <DietChartForm></DietChartForm>
            },
            {
                path: 'managePantry/addPantry',
                element: <AddPantry></AddPantry>
            },
            {
                path: 'managePantry',
                element: <ManagePantry></ManagePantry>
            },

        ]
    } 
])