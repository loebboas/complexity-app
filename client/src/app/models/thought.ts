import { Dimension } from "./dimension";

export class Thought {    
        _id: string;
        level: number;
        label: string;
        color: string;
        clicks: number;
        dimensions: Dimension[];
        showAs: string;
        user: string;
        contexts: any[];
        contents: any[]; 
        __v: number;
        texture: string;
        form: string;
        privacy: string;
}


//REGULÄRE Ausdrücke Noam Chomsky, conditional random field