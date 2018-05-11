import { Dimension } from "./dimension";
import { GridsterItem } from "angular-gridster2";

export interface Thought {    
        _id: string;
        label: string;
        level: number;
        likes: number;
        views: number;
        color: string;
        dimensions: Dimension[];
        showAs: string;
        user: string;
        contexts: any[];
        contents: any[]; 
        __v?: number;
        texture: string;
        form: string;
        privacy: string;
        grid: GridsterItem;
}


//REGULÄRE Ausdrücke Noam Chomsky, conditional random field