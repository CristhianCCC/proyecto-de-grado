import axios from "axios";

const VEHICULO_REST_API_URL = "http://localhost:8080/vehiculo";

    export default class VehiculoService {

        getVehiculos() {
            return axios.get(VEHICULO_REST_API_URL);
        }
    }