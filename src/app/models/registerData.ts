import { GeneralResponse } from './generalResponse';

export interface RegisterData {
  lang: string;
  first_name: string;
  email: string;
  phone: number;
  password: string;
}

export interface RegisterResponse extends GeneralResponse {
  status: string;
  data: RegisterDataResponse;
}

export interface RegisterDataResponse {
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
