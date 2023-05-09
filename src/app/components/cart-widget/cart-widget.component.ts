import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'cart-widget',
    templateUrl: 'cart-widget.component.html',
    styleUrls: ['cart-widget.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class CartWidgetComponent {
    items$: Observable<any[]>;
    total$: Observable<number>;

    constructor(
        public cart: CartService,
    ) {
        cart.getStoredCartItems();

        this.items$ = cart.getCartUpdates();
        this.total$ = cart.getTotalUpdates();
    }
}
