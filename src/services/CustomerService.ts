import axios, { AxiosResponse } from "axios";
import { CustomerSchemaType } from "../validators/CustomerValidator";
import { Customer } from "../types/information.tpyes";


export class CustomerService {
    async create(data: CustomerSchemaType, token: string | undefined) {
        const response = await axios.post("http://localhost:8080/api/arquinina/customer/create", data, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return response
    }

    async get(token: string | undefined) {
        const response = await axios.get("http://localhost:8080/api/arquinina/customer", {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return response
    }

    async update(data: CustomerSchemaType, token: string | undefined) {
        const response = await axios.put("http://localhost:8080/api/arquinina/customer/update", data, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return response
    }
}

