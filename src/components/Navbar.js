import React from 'react'
import { CartIcon} from '../Icons'
import { useSelector } from 'react-redux'
import { store } from '../Store'

const Navbar = () => {
 const {amount} =useSelector((store)=>store.cart)  
  return (
   
    <nav>
     <div className='nav-center'>
        <h3> redux toolkit</h3>
        <div className='nav-container'>
          
            <CartIcon/>
            <div className='amount-container'>
                <p className='total-amount'>  {amount} </p>
            </div>
        </div>
     </div>
    </nav>
   
  )
}

export default Navbar
