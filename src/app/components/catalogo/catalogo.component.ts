import { Component, OnInit } from '@angular/core';
import { Producto } from './../../models/Producto';
import {CartServicesService} from './../../services/cart-services.service';
import { ApiProductosService } from './../../services/api-productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})


export class CatalogoComponent implements OnInit {

  public products: Producto[] = [];

	// inyectar la dependencia del servicio en el constructor.
  constructor(private cartServicesService: CartServicesService, private apiService: ApiProductosService){

  }

  ngOnInit(): void {
    this.apiService.getProducts()
      .subscribe(res => {
        this.products = res;
      });
    }
  
  // crea un método para añadir un producto al carrito
  // actualizar el método para añadir un producto al carrito mediante el servicio
  addToCart(product: any) { 
	  // utilizacion del metodo addTocart del servicio cartServicesService 
    this.cartServicesService.addToCart(product)
    // utilizacion del metodo getCart del servicio cartServicesService 
    //para mostrar en el console.log los producto añadidos
    console.log( this.cartServicesService.getCart() )
  }

  // actulizar el array de productos con el atributo cantidad en cada producto
  /*
  products = [
    {
      id:1,
      name: 'Bike_1',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    },
    {
      id:2,
      name: 'Bike_2',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    },
    {
      id:3,
      name: 'Bike_3',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    }, 
    {
      id:4,
      name: 'Bike_4',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    },
    {
      id:5,
      name: 'Bike_5',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    }, 
    {
      id:6,
      name: 'Bike_6',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    },
    {
      id:7,
      name: 'Bike_7',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    }, 
    {
      id:8,
      name: 'Bike_8',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    },
    {
      id:9,
      name: 'Bike_9',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    }, 
    {
      id:19,
      name: 'Bike_10',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    }, 
    
]
*/

}