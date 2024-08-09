import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
function PublicRoute(){
    const profile = localStorage.getItem("user_id");
    return <Outlet/>
}
export default PublicRoute;