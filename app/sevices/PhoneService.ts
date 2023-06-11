import {
  TPhoneResponse,
  TPhoneShortResponse,
} from "./types.phoneService/TPhoneResponse";
import axios, { Axios, AxiosResponse } from "axios";

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
  async getSortedPhones(color:string,memory:string,lprice:number,hprice:number,short:string="true"){
    try{
      const {data} = await axios.get<AxiosResponse<any,TPhoneShortResponse>>('/get/phones',{
        params:{
          lprice,
          hprice,
          color,
          memory,
          short,
        }
      })
      return data
    } catch (err){
      console.log(err);
      
    }
    
  },
  async getPhoneById(id:string){
    const {data} = await axios.get('/get/phones',{
      params:{
        id
      }
    })
    return data
  }
};


//страница page ===   [page]
//посмотреть роутин по id
