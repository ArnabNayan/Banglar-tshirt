import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
export const RingContext = createContext('golden ring');
export const MoneyContext = createContext(0);
const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);
    return (
        <div className='grandpa'>
            <h2>Hello grandpa</h2>
            <p>Has Money:{money}</p>
            <MoneyContext.Provider value={[money,setMoney]}>
                <RingContext.Provider value='golden-ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

/**
 * 1.create a context and export
 * 2.create a provider and pass a value
 * 3.use context to recive the value
*/

export default Grandpa;