
export default function VehiculoCard() {
    const carro = "/images/Corolla-sedan-descripcion.jpg"
    return (
        <>
            <div className="max-w-xs mx-auto rounded-2xl overflow-hidden shadow-lg bg-white p-4 text-center">
                    <img className="w-full h-80 object-cover rounded-lg" src={carro} alt="imagen vehiculo" />
                    <p className="text-gray-500 text-sm mt-2">Your text</p>
                    <h2 className="font-bold text-lg mt-1">Carro</h2>
                    <p className="text-red-500 font-semibold text-xl">$10000</p>
                <div className="mt-4">
                    <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md cursor-pointer">Ver producto</button>
                </div>
            </div>
        </>
    )
}