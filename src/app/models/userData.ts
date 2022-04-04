import { GeneralResponse, Language } from './general';

export interface UpdateUserData extends Language {
  user_id: number;
  first_name: string;
  email: string;
  phone: string;
}

export interface UserResponse extends GeneralResponse {
  status: string;
  data: UserDataResponse;
}

export interface UserDataResponse {
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
