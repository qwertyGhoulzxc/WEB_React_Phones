import {TPhoneShortResponse,} from "./types.phoneService/TPhoneResponse";
import axios, {AxiosResponse} from "axios";
import {Store} from "redux";
import {phoneSliceActions} from "@/app/redux/reducers/phone.slice";
import {phonesDataActions} from "@/app/redux/reducers/phones.slice";
import {bestsellersActions} from "@/app/redux/reducers/bestsellers.slice";

//заменить на proccess.env
const API_URL = process.env.API_URL;

axios.defaults.baseURL = API_URL;

export const phoneService = {
    async getPhones(
        store: Store,
        limit: number = 12,
        page: number = 1,
        short: string = "false"
    ) {
        try {
            const {data} = await axios.get<TPhoneShortResponse>("/get/phones", {
                params: {
                    page,
                    limit,
                    short,
                },
            });
            store.dispatch(phonesDataActions.setData(data))
        } catch (e) {
            console.log(e);
        }
    },
    async getSortedPhones(color: string, memory: string, lprice: number, hprice: number, short: string = "true") {
        try {
            const {data} = await axios.get<AxiosResponse<any, TPhoneShortResponse>>('/get/phones', {
                params: {
                    lprice,
                    hprice,
                    color,
                    memory,
                    short,
                }
            })
            return data
        } catch (err) {
            console.log(err);

        }

    },
    async getPhoneById(store: Store, id: string) {
        try {
            const {data} = await axios.get('/get/phones', {

                params: {
                    id
                }
            })
            store.dispatch(phoneSliceActions.setOnePhone(data.phones[0]))
        } catch (e) {
            console.log(e)
        }


    },

    async getUniqueModels() {
        try {
            const {data} = await axios.get('/get/phones', {
                params: {
                    short: 'models'
                }
            })
            return data
        } catch (e) {
            console.log(e)
        }

    },

    async getBestsellers(store: Store, limit: number = 3) {
        try {
            const {data} = await axios.get('/get/phones', {
                params: {
                    short: 'bestsellers',
                    limit
                }
            })
            store.dispatch(bestsellersActions.setData(data))
        } catch (e) {
            console.log(e)
        }
    },

    async getPhoneByMAndCl(color: string, memory: string, search: string, short: string = 'true', limit: string = '1') {
        try {
            const {data} = await axios.get('/get/phones', {
                params: {
                    color,
                    memory,
                    search,
                    short,
                    limit,
                }
            })
            return data.phones[0].id
        } catch (e) {
            console.log(e)
        }
    },
    async getResetPhones(
        page: number = 1,
        limit: number = 12,
        short: string = "true"
    ) {
        try {
            const {data} = await axios.get<TPhoneShortResponse>("/get/phones", {
                params: {
                    page,
                    limit,
                    short,
                },
            });
            console.log(data)
            return data
        } catch (e) {
            console.log(e);
        }
    },
};


//страница page ===   [page]
//посмотреть роутин по id
