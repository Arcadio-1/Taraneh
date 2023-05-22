import { Url } from "url";
import { CoffeeType, Sell } from "./enums";
import { Tags } from "./type";

export interface Packing {
  availableGrind: [number];
  availableToOrder: number;
  value: [number];
}

export interface Price {
  currency: string;
  offPersent: number;
  price: number;
}
export interface Statistics {
  rate: number;
  buyerLiked: number;
  dateAdded: number;
  like: number;
  soled: number;
  views: number;
}
export interface Taste {
  arabica: number;
  bitter: number;
  caffeine: number;
  perfume: number;
  pickle: number;
  robusta: number;
}
export interface Product {
  id: string;
  price: Price;
  title: string;
  sell: Sell;
  statistics: Statistics;
  imageLink: Url;
  status: boolean;
  imgList: [Url];
  category: string;
  categoryAddress: string;
  packaging: Packing;
  brandFn: string;
  brandEn: string;
  description: string;
  producingCountry: string;
  packingCountry: string;
  coffeeType: CoffeeType;
  taste: Taste;
  tags: Tags;
}
