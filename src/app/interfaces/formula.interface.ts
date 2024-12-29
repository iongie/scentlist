import { RawMaterial } from "./raw-material.interface";

interface Formulas {
    name?: string;
    type?: string;
    deleted?: boolean;
    detail: RawMaterial[];
}
export  {
    type Formulas
}