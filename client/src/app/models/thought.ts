import { Dimension } from "./dimension";

export class Thought {    
        _id: String;
        level: Number;
        label: String;
        color: String;
        clicks: Number;
        dimensions: Dimension[];
        showAs: String;
        user: String;
        contexts: any[];
        contents: any[]; 
        __v: Number;
        texture: String;
        privacy: String;
}


//REGULÄRE Ausdrücke Noam Chomsky, conditional random field