import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ForProductDirective } from "./directives/for-product.directive";

@NgModule({
  declarations: [ForProductDirective],
  imports: [BrowserModule],
  exports: [ForProductDirective],
})
export class ComponentsModule {}
