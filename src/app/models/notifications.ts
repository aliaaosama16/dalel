export interface NotificationsData {
  lang: string;
  user_id: number;
}

export interface NotificationsInfo {
  lang: string;
  notification_id: number;
}

export interface NotificationsResponse {
  key: number;
  msg: string;
  show_image: boolean;
  notification_count?: number;
  data?: NotificationsDataResponse[];
}

export interface NotificationsDataResponse {
  id: number;
  message: string;
  type: string;
  order_id: number;
  order_status: string;
  date: string;
  time: string;
  duration: string;
}
