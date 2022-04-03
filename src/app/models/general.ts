export interface GeneralResponse {
  key: number;
  msg: string;
  show_image: boolean;
}

export interface Language {
  lang: string;
}

export interface Location extends UserData {
  lat: string;
  lng: string;
}

export interface UserData extends Language {
  user_id?: number;
}

export interface AuthDataResponse {
  id: number;
  user_type: string;
  first_name: string;
  email: string;
  phone: string;
  api_token: string;
  is_active: boolean;
  is_blocked: boolean;
  is_confirmed: boolean;
  lang: string;
  avatar: string;
}

export interface GeneralSection {
  key: string;
  msg: string;
  show_image: boolean;
  notification_count: number;
  data: GeneralSectionOptions;
}

export interface GeneralSectionOptions {
  countries: GeneralSection[];
  sections: GeneralSection[];
  categories: GeneralSection[];
  options: GeneralSection[];
}

export interface GeneralSection {
  id: string;
  title: string;
  image?: string;
}
