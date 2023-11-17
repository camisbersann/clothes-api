import { Clothes } from "../models/clothes/Clothes.js";
import { ClothesList } from "../models/clothes/ClothesList.js";

const list = new ClothesList();

export const getClothes = (req, res) =>{
    const { type, size, color } = req.query;

    let arrayClothes = list.getAllClothes();

    if(size && type){
        arrayClothes = list.getClothesByType(type);
        console.log(arrayClothes);
        arrayClothes = arrayClothes.filter((cloth) => cloth.size == size)
    }
    if(type){
        arrayClothes = list.getClothesByType(type);
    }
    if(size){
        arrayClothes = list.getClothesBySize(size);
    }
    if(color){
        arrayClothes = list.getClothesByColor(color);
    }

    if(arrayClothes.length <= 0) {
        return res.status(200).send({message: "Não há roupas no estoque"});
    } else {
        return res.status(200).send(arrayClothes);
    }
}

export const getClothesById = (req, res) =>{
    const { id } = req.params;
    const clothes = list.getClothesById(id);

    if(!clothes){
        return res.status(404).send({message: "Roupa não encontrada no estoque"});
    }
    return res.status(200).send(clothes);
}

export const createClothes = (req, res) =>{
    const { name, type, size, color, img, quantityStock} = req.body;
    const error = [];

    if(!name || !type || !size || !color || !img || !quantityStock){
       error.push("Preencha todos os campos");
    }
    
    if(name.length < 6 || name.length > 40){
       error.push("Nome inválido");
    }
    
    if(type.length > 50){
       error.push("Tipo inválido");
    }if(type == 'string'){
        error.push("Tipo precisa ser uma string");
    }

    if(size == 'string'){
        error.push("Digite o tamanho como PP,P,M,G ou XG")
    }

    if(color.length > 20){
        error.push("Cor inválida");
    }


   function isURLValida(url) {
        if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            return true;
        } else {
            return false;
        }
    }

    if(img == isURLValida){
       error.push("URL inválida");
    }

    if(quantityStock < 0 || quantityStock > 15000){
        error.push("Digte a quantidade entre 0 e 15000");
    }

    if(error.length > 0){
        res.status(400).send(error);
        return
    }

    const clothes = new Clothes(name, type, size, color, img, quantityStock)

    list.addClothes(clothes);

    return res.status(200).send({message: "Roupa cadastrada no estoque", clothes});
}

 export const updateClothes = (req, res) =>{
    const { id } = req.params;
    const { name, type, size, color, img, quantityStock} = req.body;
    const error = [];


    if(!name || !type || !size || !color || !img || !quantityStock){
       error.push("Preencha todos os campos");
    }

    if(name.length < 6 || name.length > 40){
        error.push("Nome inválido");
     }
     
     if(type.length > 50){
        error.push("Tipo inválido");
     }if(type == 'string'){
         error.push("Tipo precisa ser uma string");
     }
 
     if(size == 'string'){
         error.push("Digite o tamanho como PP,P,M,G ou XG")
     }
 
     if(color.length > 20){
         error.push("Cor inválida");
     }
 
 
    function isURLValida(url) {
         if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
             return true;
         } else {
             return false;
         }
     }
 
     if(img == isURLValida){
        error.push("URL inválida");
     }
 
     if(quantityStock < 0 || quantityStock > 15000){
         error.push("Digte a quantidade entre 0 e 15000");
     }
 

    const clothes = list.getClothesById(id);

    if(!clothes){
       error.push("Roupa não encontrada no estoque");
    }

    if(error.length > 0){
        res.status(400).send(error);
        return
    }

    const updateClothes = list.updateClothes(id,name,type,size,color,img,quantityStock);

    return res.status(200).send({message: "Roupa atualizada com sucesso", updateClothes});
}

export const deleteClothes = (req, res) =>{
    const { id } = req.params;
    const clothes = list.getAllClothes(id);
    const error = [];

    if(!clothes){
       error.push("Roupa não encontrada no estoque");
    }

    if(error.length > 0){
        res.status(400).send(error);
        return
    }

    list.removeClothes(id);

      return res.status(200).send({message: "Roupa deletada com sucesso"});
}

