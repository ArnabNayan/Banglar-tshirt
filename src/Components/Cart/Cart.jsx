import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import './Cart.css';
const Cart = ({cart,handleRemoveFromCart}) => {
    // console.log(cart)
    //conditional rendering :
    let message ;
    if(cart.length===0){
        message=<p>Please add some product</p>
    }
    else{
        message=<div>
            <h1>Boroloxxx</h1>
            <p>Thanks for wasting your money</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length===1?'blue':'red'}>Order Summary:{cart.length}</h2>
            <p className={`bold bordered ${cart.length===3?'purple':'yellow'}`}>Something</p>
            {cart.length>2 ? <span className='purple'>Aro kino</span>:<span>fokinni</span>}
            {message}
            {
                cart.map(tshirt=><p key={tshirt._id}>{tshirt.name}
                <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length===2 && <p>Double offer</p>
            }
            {
                cart.length===3 || <h3>dur ho</h3>
            }
        </div>
    );
};

export default Cart;

/**
 *conditional rendering
 *1.use if case to set a variablen that will contain an element,components 
 *2.turnary :conditito?'for true':'for false'
 *3.logical and &&:if the condition is true than the next thing will be displayed
 *4.logical or ||:if the condition is false than the next thing will be displayed
 * */

 /**
  *conditional css class 
  1.turnary
  2.use ternary into template string
  **/