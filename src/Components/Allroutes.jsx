
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart'
import Hompage from './Hompage'
import SignIn from './SignIn';






const Allroutes = ()=> {
  return (
    <div>
        <Routes>
<Route path='/Homepage' element={<Hompage />}/>
<Route path='/SignIn' element={<SignIn />}/>
<Route path='/Cart' element={<Cart />}/>


        </Routes>
    </div>
  )
}

export default Allroutes;