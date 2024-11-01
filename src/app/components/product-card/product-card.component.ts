import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(private productService: ProductService) { }

  @Input() product: any

  handleEdit() {
    this.productService.setSelectedProduct(this.product); // Open modal with the product
  }

  handleDelete() {
    console.log('ahmed');
    this.productService.handleDelete(this.product.id)
  }

  openModel() {
    this.productService.ToggleModel()
  }

}
