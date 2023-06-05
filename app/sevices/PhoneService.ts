import {TPhoneResponse} from './types.phoneService/TPhoneResponse'
import axios from 'axios'

//заменить на proccess.env
const API_URL = 'http://localhost:8080/api'

axios.defaults.baseURL = API_URL

export const phoneService = {
    async getPhones(limit?: number, page: number = 1, short: string = 'false') {
        try {
            const {data} = await axios.get<TPhoneResponse>('/get/phones', {
                params: {
                    limit,
                    page,
                    short
                }
            })
            return data
        } catch (e) {
            console.log(e);

        }
    }
}

//страница page ===   [page]
//посмотреть роутин по id