import { Component } from '@angular/core';

import { CartService } from '../services/cart.service';

@Component({

  selector: 'app-cart',

  templateUrl: './cart.component.html',

  styleUrls: ['./cart.component.css']

})

export class CartComponent {

products:any = [];

constructor(private cartser: CartService){

  this.cartser.observable.subscribe(res => this.products=res)

}

}