export class Producto {
    id: number;
    name: string;
    price: number;
    description: string;
    inventory: number;
    image: string;
    cantidad: number;
  
    constructor(
      id: number,
      name: string,
      price: number,
      description: string,
      inventory: number,
      image: string,
      cantidad: number = 0 // Valor por defecto de 0
    ) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.inventory = inventory;
      this.image = image;
      this.cantidad = cantidad;
    }
  }
  