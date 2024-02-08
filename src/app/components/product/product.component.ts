import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : Products[] = [];

  constructor(private prosuctservice : ProductsService, private route : Router){

  }

  ngOnInit(): void {
    this.product = this.prosuctservice.product
  }

  seeDetails(productId : number){
    console.log(productId)
    this.route.navigate(['product/', productId.toString()]);
  }
}
