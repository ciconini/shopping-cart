import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartWidgetComponent } from './cart-widget.component';
import { CartService } from '../../services/cart.service';
import { Subject } from 'rxjs';

describe('CartWidgetComponent', () => {
  let component: CartWidgetComponent;
  let fixture: ComponentFixture<CartWidgetComponent>;
  let ServiceMock: CartService;

  beforeEach(async(() => {
    ServiceMock = jasmine.createSpyObj('CartServiceMock',{
      getCartUpdates: new Subject(),
      getTotalUpdates: new Subject(),
      getStoredCartItems: void 0
    });

    TestBed.configureTestingModule({
      declarations: [ CartWidgetComponent ],
      providers: [
        { provide: CartService, useValue: ServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
