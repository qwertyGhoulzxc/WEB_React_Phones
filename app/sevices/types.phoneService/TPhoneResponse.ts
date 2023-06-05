import { TPhone, TShortPhone } from "./TPhone";

export interface TPhoneResponse{
total: number,
page: number,
limit: number,
phones:TPhone[]
}

export interface TPhoneShortResponse{
    total: number,
    page: number,
    limit: number,
    phones:TShortPhone[]
    }