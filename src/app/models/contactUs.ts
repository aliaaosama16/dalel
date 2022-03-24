export interface ContactUsData {
  lang: string;
  name: string;
  phone: string;
  message: string;
}

export interface ContactUsResponse {
  key: number;
  msg: string;
  show_image: boolean;
}
