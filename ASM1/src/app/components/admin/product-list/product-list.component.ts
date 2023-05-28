import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.scss' ]
} )
export class ProductListComponent
{
  products: IProduct[] = [];

  constructor ( private proServices: ProductService )
  {
    this.proServices.getAllPro().subscribe( data =>
    {
      this.products = data
    } )
  }

  deletePro ( id: number )
  {
    const confirm = window.confirm( "Are you sure?" );
    if ( confirm )
    {
      this.proServices.deletePro( id ).subscribe( () =>
      {
        this.products = this.products.filter( pro => pro.id !== id )
      } )
    }
  }
}
