import { GeneralResponse } from "./generalResponse";

export interface UserData {
  lang: string;
  user_id: number;
}

export interface NotificationsInfo {
  lang: string;
  notification_id: number;
}

export interface NotificationsResponse extends GeneralResponse {
  notification_count?: number;
  data?: UserDataResponse[];
}

export interface UserDataResponse {
  id: number;
  message: string;
  type: string;
  order_id: number;
  order_status: string;
  date: string;
  time: string;
  duration: string;
}
