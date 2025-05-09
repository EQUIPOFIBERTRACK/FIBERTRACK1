import { useState, useEffect } from "react";
import ApiRequest from "../hooks/apiRequest";

import { LoadFragment } from "../fragments/Load.fragment";
import PackageCard from "./Packages.card";

function ServicePackagesComponent() {
    const { makeRequest, loading, error } = ApiRequest(import.meta.env.VITE_API_BASE);
    const [data, setData] = useState([]);
    const [select, setSelect] = useState(null);

    const handleLoad = async () => {
        try {
            const res = await makeRequest('/packages/all');
            setData(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleLoad()
    }, [makeRequest]);

    if (loading) return <LoadFragment />

    if (error) return <p>Error: {error}</p>

    return (
        <div className="container-fluid d-flex justify-content-center mt-1">
            <PackageCard services={data ? data : []} onSelected={setSelect} />
        </div>
    )
}

export default ServicePackagesComponent;