import axios from "axios";
import { ResidentsSchemaType } from "../validators/ResidentValidator";


export class ResidentService {
    async create(data: ResidentsSchemaType, token: string | undefined) {
        const response = await axios.post("http://localhost:8080/api/arquinina/resident/create", data, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return response
    }

    async getAll(token: string | undefined) {
        const response = await axios.get("http://localhost:8080/api/arquinina/resident/all", {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return response
    }

    async update(data: ResidentsSchemaType, token: string | undefined) {
        const response = await axios.put("http://localhost:8080/api/arquinina/resident/update", data, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return response
    }
}

