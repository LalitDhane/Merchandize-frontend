import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../shared/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public cartIcon = faCartShopping;
  public title = 'Homemade-Bags';
  public cartCount$?: BehaviorSubject<number>;
  public onHomePage: boolean = false;
  constructor(private cartService: CartService, private router: Router) {
    this.cartCount$ = cartService.cartCount$;
    this.onHomePage = router.url.includes('/home');
  }
}
