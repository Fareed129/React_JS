import React from 'react'

const Status= ({status})=>{
console.log(status)

return(
    <div>
        <h3>
            User is {status ? "🟢 ONLINE" : "🔴 OFFLINE"}
        </h3>
    </div>
)

}

export default Status