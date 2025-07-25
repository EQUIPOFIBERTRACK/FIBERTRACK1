import { useState, useEffect } from 'react';
import ApiRequest from '../hooks/apiRequest.jsx';

import PaymentCard from './Payment.card.jsx';
import PaymentInfo from './Payment.info.jsx';
import { LoadFragment } from '../fragments/Load.fragment.jsx'

function PaymentComponent() {
    const { makeRequest, loading, error } = ApiRequest(import.meta.env.VITE_API_BASE);
    const [data, setData] = useState([]);
    const [select, setSelect] = useState(null);

    const handleLoad = async () => {
        try {
            const res = await makeRequest('/pay/all');
            setData(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleLoad()
    }, [makeRequest]);

    if (loading) return <LoadFragment />;

    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="container-fluid d-flex justify-content-center mt-1">
                <PaymentCard payments={data ? data : []} onSelected={setSelect} />

                <PaymentInfo payment={select ? select : ''} />
            </div>
        </>
    );
}

export default PaymentComponent;