import { Component, Input } from '@angular/core';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {

  constructor(private productService: ProductService) { }

  @Input() product: any;
  @Input() isOpen: boolean = false;

  showOpenModel() {
    return this.productService.isOpen
  }

  closeModel() {
    this.productService.isOpen = false;
  }

  handleSubmit() {
    this.productService.updateProduct(this.product); // Update product logic
  }

}
