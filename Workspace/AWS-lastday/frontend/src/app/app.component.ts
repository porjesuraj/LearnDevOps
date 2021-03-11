
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products = []

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service
      .getProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']
          console.log(this.products)
        } else {
          alert('error')
        }
      })
  }

}

            