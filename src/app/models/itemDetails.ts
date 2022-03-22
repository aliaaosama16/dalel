export interface ItemDetails {
  name: string;
  rating: string;
  id: number;
  catID:number;
  image: string;
  city: string;
  address: string;
  price?: number;
  unit: string;
  perUnit: string;
  arrivalTime?: string;
  leftTime: string;
  arrivalDate?: string;
  leftDate?: string;
  isFav?: boolean;
  description?: string;
  reservationRules?: string;
  roomsNumber?:number;
  space?:number;
  bathRoomsNUmber?:number;
  
}
