import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component( {
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: [ './product-add.component.scss' ]
} )
export class ProductAddComponent
{
  product: any = {
    name: "",
    price: 0
  }

  constructor ( private route: ActivatedRoute, private proServices: ProductService, private router: Router ) { }

  onSubmit ()
  {
    this.proServices.addPro( this.product ).subscribe( product => console.log( product ) );
    this.router.navigate( [ "admin/product" ] )
  }
}
