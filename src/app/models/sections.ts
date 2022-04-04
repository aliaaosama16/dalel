import { GeneralResponse, GeneralSectionResponse, UserData } from './general';

export interface SectionsResponse extends GeneralResponse {
  notification_count: number;
  data: SectionsResponseOptions;
}

export interface SectionsResponseOptions {
  countries: GeneralSectionResponse[];
  sections: GeneralSectionResponse[];
  categories: GeneralSectionResponse[];
  options: GeneralSectionResponse[];
}


export interface ShowDepartmetData extends UserData{
  department_id:number;
}