export class ClothesList {
    constructor() {
        this.clothes = [];
    }

    getAllClothes() {
        return this.clothes;
    }

    getClothesByType(type) {
        const filtrado = this.clothes.filter((cloth) => cloth.type == type)
        console.log(filtrado);
        return filtrado
    }

    getClothesBySize(size) {
        return this.clothes.filter((cloth) => cloth.size == size)
    }

    getClothesByColor(color) {
        return this.clothes.find((cloth) => cloth.color == color)
    }

    getClothesById(id) {
        return this.clothes.find((clothes) => clothes.id == id)
    }

    addClothes(cloth) {
        this.clothes.push(cloth);
    }

    removeClothes(id) {
        this.clothes = this.clothes.filter((clothes) => clothes.id !== id)
    }

    updateClothes(id, name, type, size, color, img, quantityStock) {
        const index = this.clothes.findIndex((clothes) => {
            if (clothes.id == id) {
                clothes.name = name;
                clothes.type = type;
                clothes.size = size;
                clothes.color = color;
                clothes.img = img;
                clothes.quantityStock = quantityStock;
            }
        })
    }


}