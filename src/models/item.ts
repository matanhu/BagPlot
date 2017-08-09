import { Guid } from './guid';
export class Item {
    public itemId: string;
    
    constructor(
        public title: string,
        public image: string,
        public text: string
    ) {
        this.itemId = new Guid().guid;
    }
}