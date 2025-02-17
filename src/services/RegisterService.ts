import axios from "axios";
import { RegisterModel } from "../models/RegisterModel";


export class RegisterService {

    async register(data: RegisterModel) {
        const response = axios.post("http://localhost:8080/api/arquinina/register", data)

        return response;
    }
}