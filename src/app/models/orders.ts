import { GeneralResponse, UserData } from './general';
export interface UserOrdersData extends UserData {
  status: string;
}

export enum OrderStatus {
  current,
  finish,
}

export interface OrderResponse extends GeneralResponse {
  data: Order[];
}

export interface Order {
  id: number;
  user_id: number;
  user_name: string;
  user_phone: string;
  provider_id: number;
  provider_name: string;
  provider_phone: string;
  provider_lat: number;
  provider_lng: number;
  provider_avatar: string;
  provider_distance: number;
  provider_debt: number;
  department_id: number;
  department_title: string;
  department_rate: number;
  department_area: number;
  department_price: number;
  department_country_id: number;
  department_country_title: string;
  department_city_id: number;
  department_city_title: string;
  department_neighborhood_id: number;
  department_neighborhood_title: string;
  department_section_id: number;
  department_section_title: string;
  department_lat: number;
  department_lng: number;
  department_image: string;
  department_distance: number;
  status: string;
  status_f: string;
  status_map: StatusMap;
  payment_method: string;
  payment_method_f: string;
  value_added: number;
  total_before_promo: number;
  total_after_promo: number;
  duration: string;
  is_rated: boolean;
  rate: number;
  desc: string;
  order_date_time: string;
  order_date: string;
}

export enum StatusMap {
  refused,
  new,
  has_provider,
  in_way,
  finish,
}

export interface OrderData extends UserData {
  order_id: number;
}

export interface OrderDataResponse extends GeneralResponse {
  data: Order;
}
