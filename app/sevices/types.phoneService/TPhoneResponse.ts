import { TPhone, TShortPhone } from "./TPhone";

export interface TPhoneResponse {
  total: number;
  page: number;
  limit: number;
  phones: TPhone[];
}

export interface TPhoneShortResponse {
  uniqueMemory: string[];
  uniqueColors: string[];
  minPrice: number;
  maxPrice: number;
  total: number;
  page: number;
  limit: number;
  phones: TShortPhone[];
}
