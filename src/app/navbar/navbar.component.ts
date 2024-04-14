import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../shared/cart.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public cartIcon = faCartShopping;
  public title = 'Homemade-Bags';
  public cartCount$?: Subject<number>;
  constructor(private cartService: CartService) {
    this.cartCount$ = cartService.cartCount$;
  }
}
