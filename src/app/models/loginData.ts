import { GeneralResponse, UserData } from './generalResponse';

export interface AuthData extends UserData {
  phone?: number;
  password?: string;
  device_id: string;
}

export interface AuthResponse extends GeneralResponse {
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

export enum Status {
  Active = 'active',
  NonActive = 'non-active',
  Blocked = 'blocked',
}
