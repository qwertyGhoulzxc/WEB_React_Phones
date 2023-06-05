import {
  TPhoneResponse,
  TPhoneShortResponse,
} from "./types.phoneService/TPhoneResponse";
import axios from "axios";

//заменить на proccess.env
const API_URL = "http://localhost:8080/api";

axios.defaults.baseURL = API_URL;

export const phoneService = {
  async getPhones(
    limit: number = 12,
    page: number = 2,
    short: string = "false"
  ) {
    try {
      const { data } = await axios.get<TPhoneShortResponse>("/get/phones", {
        params: {
          page,
          limit,
          short,
        },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

//страница page ===   [page]
//посмотреть роутин по id
