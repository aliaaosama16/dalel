import { UserData } from "./general";

export interface  ActivationData extends UserData{  
    code:string,
    device_id:string
}

