import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryBackendService } from './in-memory-backend-service'

import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home/home.component';
import { ProductsDataService } from './services/products-data.service';
import { ProductsService } from './services/products.service';
import { CartDataService } from './services/cart-data.service';
import { CartService } from './services/cart.service';
import { ComponentsModule } from './core/core.module';
import { CoreModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryBackendService),
    ComponentsModule,
    CoreModule
  ],
  providers: [
    ProductsDataService,
    ProductsService,
    CartDataService,
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
