import { GeneralResponse, GeneralSection, GeneralSectionResponse } from './general';
import { Item } from './item';

export interface HomeResponse extends GeneralResponse {
  notification_count: number;
  data: HomeResponseOptions;
}

export interface HomeResponseOptions {
  sliders: GeneralSectionResponse[];
  sections: GeneralSectionResponse[];
  near_departments: Item[];
}
