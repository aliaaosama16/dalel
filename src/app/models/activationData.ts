import { UserData } from "./generalResponse";

export interface  ActivationData extends UserData{  
    code:string,
    device_id:string
}

