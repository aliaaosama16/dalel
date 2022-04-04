import { GeneralResponse, GeneralSectionResponse } from './general';


export interface Item {
  id: number;
  title: string;
  desc: string;
  order_desc: string;
  lat: number;
  lng: number;
  distance: number;
  is_favourite: boolean;
  rooms_count: number;
  bathrooms_count: number;
  people_count: number;
  area: number;
  price: number;
  seen: number;
  saler_id: number;
  saler_name: string;
  saler_phone: string;
  saler_full_phone: string;
  rate: number;
  country_id: number;
  country_title: string;
  city_id: number;
  city_title: string;
  neighborhood_id: number;
  neighborhood_title: string;
  section_id: number;
  section_title: string;
  first_image: string;
  date_time: string;
  date: string;
  time: string;
  updated_at: string;
  closed_date: string[];
  categories: GeneralSectionResponse[];
  options: GeneralSectionResponse[];
  images: GeneralSectionResponse[];
}

export interface DepartmentResponse extends GeneralResponse {
  data:Item[]
}
