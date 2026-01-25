import Greet from './Components/Greet'
import Status from './Components/Status'
import Offer from './Components/Offer'
import UserRole from './Components/UserRole'

// if isLogIn true--> return--> greeting / else---> return LogIn.jsx form
function App() {

let isLogIn= true;  

let ActiveStatus= true;

let price= 300

let role= 'seller'
  return (
    <>
    <Greet status={isLogIn}/>

    {/* second method- using ternary operator--> go to Status.jsx */}
    <Status status={ActiveStatus}/>

    {/* third method - using logical gates */}
    <Offer price={price} />

    <UserRole role={role}/>
    </>
  )
}

export default App
