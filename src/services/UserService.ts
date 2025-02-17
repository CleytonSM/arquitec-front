import axios from "axios";
import { UserInfoSchemaType } from "../validators/UserInfoValidator";


export class UserService {

    async update(token: string | undefined, data: UserInfoSchemaType) {
        if(token === undefined) {
            throw Error;
        }

        const response = axios.put("http://localhost:8080/api/arquinina/user/update", data, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return response;
    }
}