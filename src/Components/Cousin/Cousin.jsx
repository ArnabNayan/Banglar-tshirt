import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children,hasfriend,ring}) => {
    return (
        <div>
            <h3>Cousin</h3>
            <p><small>{children}</small></p>
            {hasfriend&&<Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;