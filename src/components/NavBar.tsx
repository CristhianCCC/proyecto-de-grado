

export default function NavBar() {

    const imagenNav ="/images/logo.png"

    return (
        <nav className="bg-gray-700 py-4"> 
            <div className="container max-w-6xl mx-auto flex items-center justify-between">
                <a href="">
                    <img src={imagenNav} className="h-20 w-auto" alt="Logo DIMECARS"/>
                </a>
                <ul className="flex gap-10">
                    <a href="#" className="text-white hover:underline">Inicio</a>
                    <a href="#" className="text-white hover:underline">Vehículos</a>
                    <a href="#" className="text-white hover:underline">Contacto</a>
                </ul>
            </div>
        </nav>
    )
}   