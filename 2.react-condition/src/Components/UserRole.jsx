import React from "react";
import Admin from "./Admin"
import User from "./User"
import Seller from "./Seller"

const UserRole = ({role}) =>{
    return(
        <div>
            {
               role=='admin' ? <Admin/> : role=='seller' ? <Seller/> : <User/> 
            }
        </div>
    )
}
export default UserRole