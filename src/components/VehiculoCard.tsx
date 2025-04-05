import { useEffect, useState } from "react"
import VehiculoService from "../services/VehiculoService";
import { Vehiculo } from "../types";
import { useNavigate } from "react-router";
import  FormatCurrency from "../helpers"


export default function VehiculoCard() {


    const [vehiculo, setVehiculo] = useState<Vehiculo[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        VehiculoService.getVehiculos().then((response: { data: Vehiculo[] }) => {
            setVehiculo(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const corolla = "/images/Corolla-sedan-descripcion.jpg"

    return (
        <>  
                {vehiculo.map(carro => (      
                    <div key={carro.id} className="max-w-xs mx-auto rounded-2xl overflow-hidden shadow-lg bg-white p-4 text-center">
                <img className="w-full h-100 object-cover rounded-lg" src={corolla} alt="imagen vehiculo" />
                    <h2 className="font-bold text-lg mt-1">{carro.nombre}</h2>
                    <p className="text-gray-500 text-sm mt-2">{carro.descripcion}</p>
                    <p className="text-bold-500 font-semibold text-xl">{FormatCurrency(carro.precio)}</p>
                    <div className="mt-4">
                    <button className="bg-lime-600 text-white font-bold px-4 py-2 rounded-lg shadow-md cursor-pointer" onClick={() => navigate(`/vehiculo/${carro.id}`)}>Ver producto</button>
                </div>
            </div>
                ))}
                
        </>
    )
}