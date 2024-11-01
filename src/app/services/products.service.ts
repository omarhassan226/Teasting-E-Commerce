import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http = inject(HttpClient);


  getAllProducts() {
    return this.http.get("http://localhost:3000/products");
  }

  createNewProduct(product: any) {
    return this.http.post("http://localhost:3000/products", product);
  }

  updateProduct(product: any, id: string) {
    return this.http.patch("http://localhost:3000/products/" + id, product);
  }

  deleteProduct(id: string) {
    return this.http.delete("http://localhost:3000/products/" + id);
  }
}
