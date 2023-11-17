import { v4 as uuidv4 } from "uuid";

export class Clothes {
    constructor (name, type, size, color, img, quantityStock){
        this.id= uuidv4();
        this.name= name;
        this.type= type;
        this.size= size;
        this.color= color;
        this.img= img;
        this.quantityStock= quantityStock;
    }
}