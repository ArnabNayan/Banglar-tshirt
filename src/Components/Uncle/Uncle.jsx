import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney]=useContext(MoneyContext);
    return (
        <div>
            <h3>Uncle</h3>
            <p><small>granpa money:{money}</small></p>
            <button onClick={()=>setMoney(money+1000)}>Send 1000tk</button>
            <section className='flex'>
                <Cousin>Abil</Cousin>
                <Cousin>Nabil</Cousin>
            </section>
        </div>
    );
};

export default Uncle;