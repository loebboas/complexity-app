import { Dimension } from "./dimension";

export class Thought {    
        _id: String;
        label: String;
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