import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterOutlet,
       CommonModule,
      ReactiveFormsModule
    ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  
  
    productos = [
     {id: 1, nombre: 'Producto A', precio: 100, descuento: true},
     {id: 2, nombre: 'Producto B', precio: 200, descuento: false},
     {id: 3, nombre: 'Producto C', precio: 300, descuento: true},

  ];

  fb = inject(FormBuilder)

  form = this.fb.nonNullable.group(
    {
      id: [0, Validators.required],
      nombre: ['',[Validators.required, Validators.minLength(3)]],
      precio: ['',Validators.required],
      descuento: [false]

    }
  );

  addProducto(){

}




}
