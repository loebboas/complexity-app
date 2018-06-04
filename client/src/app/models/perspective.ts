import { Dimensions } from "./Dimensions/dimensions";

export interface Perspective {
    _id?: string,
    objId?: string,
    label: string,
    dimensions: Dimensions
}
