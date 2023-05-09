import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CartItemControlComponent } from "./cart-item/cart-item-control.component";
import { CartWidgetComponent } from "./cart-widget/cart-widget.component";
import { ProductsListComponent } from "./product-list/products-list.component";

@NgModule({
  declarations: [
    ProductsListComponent,
    CartWidgetComponent,
    CartItemControlComponent,
  ],
  imports: [BrowserModule],
  exports: [
    ProductsListComponent,
    CartWidgetComponent,
    CartItemControlComponent,
  ]
})
export class CoreModule {}
