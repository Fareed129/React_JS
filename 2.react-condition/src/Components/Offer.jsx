import React from 'react'
const Offer = ({price}) =>{
    return(
        <div>
            <p>Price: Rs.{price}</p> 
            {price < 500 && <span>Limited time offer</span>}
        </div>
    )
}
export default Offer