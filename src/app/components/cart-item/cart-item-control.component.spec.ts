import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { CartItemControlComponent } from './cart-item-control.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../core/interfaces/product.interface';

describe('CartItemControlComponent', () => {
  let component: CartItemControlComponent;
  let fixture: ComponentFixture<CartItemControlComponent>;
  let ServiceMock: CartService;
  let MockProduct: Product;

  beforeEach(async(() => {
    MockProduct = {
      id: 123,
      name: 'Mock Product',
      price: 100,
    };

    ServiceMock = jasmine.createSpyObj('CartServiceMock', {
      getCartUpdates: new Subject(),
      getItemUpdates: new Subject(),
      getTotalUpdates: new Subject(),
      fetchItems: void 0,
    });

    TestBed.configureTestingModule({
      declarations: [ CartItemControlComponent ],
      providers: [
        { provide: CartService, useValue: ServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemControlComponent);
    fixture.componentInstance.product = MockProduct;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // giving this error: this.cart.getItem is not a function
    // however this is a function and it is implemented in cartService, and I dint have enought time to figure out what is happening.
    expect(component).toBeTruthy();
  });

  it('should unsubscribe when component is destroyed', async(() => {
    const mockSubject = ServiceMock.getItemUpdates(MockProduct.id);
    fixture.destroy();

    expect(mockSubject['observers'].length).toEqual(0);
  }));
});
