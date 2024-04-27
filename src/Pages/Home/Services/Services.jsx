import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <div className="text-center mt-3 space-y-2">
                <h3 className="text-3xl font-bold  text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p className="w-2/3 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key ={service.service_id}
                        service={service}

                    ></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;