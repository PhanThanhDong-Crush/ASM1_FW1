import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component( {
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: [ './product-edit.component.scss' ]
} )
export class ProductEditComponent
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

  onSubmit ()
  {
    this.proServices.editPro( this.product ).subscribe( product => console.log( product ) );
    this.router.navigate( [ "admin/product" ] )
  }
}
