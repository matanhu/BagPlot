import { Item } from "./item";
import { Location } from "./location";

export class Project {
    constructor(
        public projectName: string,
        public projectImage: string,
        public projectDescription: string,
        public itemsList: Item[],
        public location: Location
    ) {}
}