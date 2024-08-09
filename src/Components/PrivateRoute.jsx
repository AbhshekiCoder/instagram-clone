import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
function PrivateRoute(){
    const Profile = localStorage.getItem("user_id");
    return Profile?<Outlet/>:<Navigate to ="/SigninModal"/>

}
export default PrivateRoute;