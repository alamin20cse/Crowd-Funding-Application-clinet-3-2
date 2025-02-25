import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccessed = () => {
    const {id}=useParams()
    return (
        <div>
            <h1>Payment succesesed</h1>
            <h1>Transtion id : {id}</h1>
            
        </div>
    );
};

export default PaymentSuccessed;