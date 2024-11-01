import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { products } from './../productsDB';
import { ProductsService } from './services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  productsService = inject(ProductsService);
  subscription!: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.subscription = this.productsService.getAllProducts().subscribe({
      next: (products) => console.log(products),
    });

    const newProduct = {
      "id": 7,
      "name": "Omar Hassan",
      "description": "Fast charging portable power bank with 10000mAh capacity.",
      "price": 24.99,
      "category": "Accessories",
      "stock": 180,
      "imageUrl": "https://example.com/images/portable-charger.jpg"
    }

    this.subscription = this.productsService.createNewProduct(newProduct).subscribe({
      next: (products) => console.log(products),
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe({
      complete: () => console.log("Product Deleted Successfully")
    });
  }
  title = 'E-Commerce';
  dataFromForm: object = {}
  userName = 'Omar Hassan'

  getProducts() {
    return this.productService.getProducts()
  }

  get selectedProduct() {
    return this.productService.selectedProduct; // Get the currently selected product
  }

  get isModalOpen() {
    return this.productService.isOpen; // Get the modal state
  }

  closeModal() {
    this.productService.closeModal(); // Close the modal
  }

  handleProductUpdate(updatedProduct: any) {
    this.productService.updateProduct(updatedProduct); // Update the product in the service
    this.closeModal(); // Close the modal
  }

  sayHello() {
    console.log('hello');
  }

  handleSelectId(id: number) {
    console.log(id);
  }

  handleNameChange(data: { name: string }) {
    this.dataFromForm = data;
    console.log(data);
    console.log(this.dataFromForm);
  }
}
