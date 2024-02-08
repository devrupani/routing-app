import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Products } from 'src/app/Products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productUserSelected! : number ;
  product!: Products | undefined ;

  constructor(
    private activatedRoute : ActivatedRoute,
    private ps: ProductsService
  ){}

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (productId !== null) {
      this.productUserSelected = +productId;
      
    } 

    

    this.product = this.ps.product.find((x: Products) =>  x.id === this.productUserSelected);


    
    
    
  }

}
