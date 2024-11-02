import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterOutlet,
       CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {


  productos = [
     {id: 1, nombre: 'Producto A', precio: 100, descuento: true},
     {id: 2, nombre: 'Producto B', precio: 200, descuento: false},
     {id: 3, nombre: 'Producto C', precio: 300, descuento: true},

  ];


}
