import axios from "axios";
import { SocialMediasSchemaType } from "../validators/SocialMediaValidator";


export class SocialMediaService {
    async create(data: SocialMediasSchemaType, token: string | undefined) {
        const response = await axios.post("http://localhost:8080/api/arquinina/social_media/create", data, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return response
    }

    async getAll(token: string | undefined) {
        const response = await axios.get("http://localhost:8080/api/arquinina/social_media/all", {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return response
    }

    async update(data: SocialMediasSchemaType, token: string | undefined) {
        const response = await axios.put("http://localhost:8080/api/arquinina/social_media/update", data, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return response
    }

    async delete(data: string, token: string | undefined) {
        const response = await axios.delete(`http://localhost:8080/api/arquinina/social_media/delete?ids=${data}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return response
    }
}

