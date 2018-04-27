import { Dimension } from "./dimension";

export class User {    
    email: String;
    username: String;
    private: [{ persona: String, apps: [{ app: String, obj: String, _id: String }], dimensions: Dimension[] }];
    public: [{ persona: String, apps: [{ app: String, obj: String, _id: String }], dimensions: Dimension[] }];
    friends: [{ friendId: String, label: String, showPersona: [{ personaId: String }]}];
}