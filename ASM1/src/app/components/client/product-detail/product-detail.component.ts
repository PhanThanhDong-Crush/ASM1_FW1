import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component( {
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: [ './product-detail.component.scss' ]
} )
export class ProductDetailComponent
{
  product: any = {
    name: "",
    price: 0
  }

  constructor ( private route: ActivatedRoute, private proServices: ProductService, private router: Router )
  {
    this.route.paramMap.subscribe( param =>
    {
      const id = Number( param.get( 'id' ) )

      this.proServices.getOnePro( id ).subscribe( pro =>
      {
        this.product = pro
      }, error => console.log( error.message ) )
    } )
  }
}
