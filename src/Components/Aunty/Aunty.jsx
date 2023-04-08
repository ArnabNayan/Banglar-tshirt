import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
            <Cousin>Kabil</Cousin>
            <Cousin hasfriend={true}ring={ring}>Nabilur</Cousin>
            </section>
        </div>
    );
};

export default Aunty;