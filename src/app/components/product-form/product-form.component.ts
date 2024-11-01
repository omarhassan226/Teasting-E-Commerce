import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  constructor(private productService: ProductService) { }

  newProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    category: '',
    imageUrl: '',
    state: true,
    inStock: true,
    quantity: 1,
  };

  addProduct() {
    this.productService.addProduct(this.newProduct)
    this.resetForm()
  }

  resetForm() {
    this.newProduct = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      category: '',
      imageUrl: '',
      state: true,
      inStock: true,
      quantity: 1,
    };
  }

}
