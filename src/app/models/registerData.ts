import { AuthDataResponse, GeneralResponse, Language } from './general';

export interface RegisterData extends Language {
  first_name: string;
  email: string;
  phone: number;
  password: string;
}

export interface RegisterResponse extends GeneralResponse {
  status: string;
  data: AuthDataResponse;
}
