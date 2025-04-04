import Footer from "./components/footer"
import NavBar from "./components/NavBar"
import VehiculoCard from "./components/VehiculoCard"


function App() {

  return (
    <>
      <NavBar/>
      <div className="py-20 text-black text-3xl text-center font-bold">
        <h1 className="text-4xl">Listado de vehiculos disponibles</h1>
      </div>
      <div className="container mx-auto">
      <div className="xl:grid xl:grid-cols-4 lg:grid-cols-3 md:grid md:grid-cols-2 gap-5">
        <VehiculoCard/>
      </div>
      </div>

      <Footer/>
    </>
  )
}

export default App
