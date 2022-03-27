export interface AuthData {
  lang: string;
  phone: number;
  password?: string;
  device_id: string;
  user_id?:string;
}

export interface AuthResponse {
  key: number;
  msg: string;
  show_image: boolean;
  status?: string;
  data?: AuthDataResponse;
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
