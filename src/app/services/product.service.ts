import { Injectable } from '@angular/core';
import { products } from '../../productsDB';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = products;

  selectedProduct: any = null; // To store the currently selected product
  isOpen = false

  ToggleModel() {
    this.isOpen = !this.isOpen
  }

  getProducts() {
    return this.products;
  }

  handleDelete(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
    console.log('Deleted product ID:', id);
    console.log('Updated products:', this.products);
  }

  addProduct(newProduct: any) {
    newProduct.id = this.products.map((product) => {
      return product.id + 1;
    })
    this.products.push(newProduct)
    console.log(`Added product:`, newProduct);
  }

  setSelectedProduct(product: any) {
    this.selectedProduct = product; // Set the product to edit
    this.isOpen = true; // Open the modal
  }

  closeModal() {
    this.isOpen = false; // Close the modal
  }

  updateProduct(updatedProduct: any) {
    const productIndex = this.products.findIndex((product) => {
      product.id === updatedProduct.id
    })
    if (productIndex !== -1) {
      this.products[productIndex] = updatedProduct;
      console.log(updatedProduct);
    }
  }
}
