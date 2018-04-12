import { Dimension } from "./dimension";
import { Thought } from "./thought";

export class Content {    
        _id: String;
        label: String;
        dimensions: Dimension[];
        showAs: String;
        user: String;
        contexts: any[];
        contents: Thought[];
        privacy: String; 
        __v: Number;
        inputTime: String;
}


//REGULÄRE Ausdrücke Noam Chomsky, conditional random field