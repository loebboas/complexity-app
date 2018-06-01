import { LevelDimension } from "./levelDimension";
import { NumberDimension } from "./numberDimension";
import { TagDimension } from "./tagDimension";
import { DateDimension } from "./dateDimension";
import { LocationDimension } from "./locationDimension";

export interface Dimensions {
       levelDimensions?: LevelDimension[],
       numberDimensions?: NumberDimension[],
       tagDimensions?: TagDimension[],
       dateDimensions?: DateDimension[], 
       locationDimensions?: LocationDimension[]
}
