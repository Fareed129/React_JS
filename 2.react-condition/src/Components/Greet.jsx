import React from 'react'
import LogIn from './LogIn'

const Greet= (props)=>{
    // console.log(props.status)
    if(props.status){
        return <h1>Welcom User ! 🎉🥳</h1>
    }else{
        return <LogIn />
    }
}

export default Greet