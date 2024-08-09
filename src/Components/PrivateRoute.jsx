import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
function PrivateRoute(){
    const Profile = localStorage.getItem("user_id");
    return Profile?<Navigate to ="/SigninModal"/>:<Outlet/>

}
export default PrivateRoute;
