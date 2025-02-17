import axios from "axios";
import { LoginSchemaType } from "../validators/LoginValidator";



export class LoginService {
    async login(data: LoginSchemaType) {
        const response = await axios.post("http://localhost:8080/api/arquinina/login", data);
        
        return response
    }
}