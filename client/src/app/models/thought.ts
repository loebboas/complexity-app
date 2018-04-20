import { Dimension } from "./dimension";

export class Thought {    
        _id: String;
        level: Number;
        label: String;
        compApp: Number;
        dimensions: Dimension[];
        showAs: String;
        user: String;
        contexts: any[];
        contents: any[];
        privacy: String; 
        __v: Number;
        inputTime: String;
}


//REGULÄRE Ausdrücke Noam Chomsky, conditional random field