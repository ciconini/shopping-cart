import { CartDataService } from './cart-data.service';
import { Injectable } from '@angular/core';
import { CartItem } from '../core/interfaces/cart-item.interface';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../core/interfaces/product.interface';

interface CartProducts {
    items: CartItem[];
    total: number;
}

@Injectable()
export class CartService {
    protected _products = {
        items: [],
        total: 0,
    };

    protected _cartState = new Subject<CartProducts>();

    constructor(
        protected dataService: CartDataService,
    ) { }

    getStoredCartItems() {
        this.dataService.fetchAll().subscribe();
    }


    addProduct(product: Product) {
       
    }

    removeProduct(product: Product, shouldRemoveAll = false) {
      
    }

    //HELPER METHODS

    protected updateCartState(products: CartProducts) {
        this._products = products;
        this._cartState.next(products);
    }

    protected calculateTotal(items: CartItem[]): number {
        return items.reduce((total, item) => total += item.subtotal, 0);
    }

    protected calculateSubtotal(item: CartItem): CartItem {
        item.subtotal = item.product.price * item.amount;
        return item;
    }

    protected getProducts() {
        return this._products;
    }

    getItems() {
        return this.getProducts().items;
    }

    getItem(id: number) {
        return this.getProducts().items.find(item => item.id === id);
    }

    getTotal() {
        return this.getProducts().total;
    }

    getCartUpdates() {
        return this._cartState.pipe(map(() => this.getItems()));
    }

    getItemUpdates(id: number) {
        return this._cartState.pipe(map(() => this.getItem(id)));
    }

    getTotalUpdates() {
        return this._cartState.pipe(map((s) => s.total));
    }
}
