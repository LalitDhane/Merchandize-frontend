import { Component, OnInit } from '@angular/core';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../shared/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public cartIcon = faCartShopping;
  public userIcon = faUser;
  public title = 'Homemade-Bags';
  public cartCount$?: BehaviorSubject<number>;
  public onHomePage: boolean = false;
  public onCartPage: boolean = false;
  public user?: string | null;
  constructor(private cartService: CartService, private router: Router) {
    this.cartCount$ = cartService.cartCount$;
    this.onHomePage = router.url.includes('/home');
    this.onCartPage = router.url.includes('/cart');
  }
  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }
}
