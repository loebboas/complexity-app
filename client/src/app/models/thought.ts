import { Dimension } from "./dimension";
import { GridsterItem } from "angular-gridster2";

export interface Thought {    
        _id?: string;
        level: number;
        label: string;
        color?: string;
        clicks: number;
        dimensions?: Dimension[];
        showAs: string;
        user: string;
        contexts?: any[];
        contents: any[]; 
        __v?: number;
        texture?: string;
        form?: string;
        privacy?: string;
        grid?: GridsterItem;
}


//REGULÄRE Ausdrücke Noam Chomsky, conditional random field