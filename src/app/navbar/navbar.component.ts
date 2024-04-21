import { Component, OnInit } from '@angular/core';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../shared/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UserDetails } from '../Models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public cartIcon = faCartShopping;
  public userIcon = faUser;
  public title = 'Merchandize';
  public cartCount$?: BehaviorSubject<number>;
  public onHomePage: boolean = false;
  public onCartPage: boolean = false;
  public userDetails!: UserDetails;
  constructor(private cartService: CartService, private router: Router) {
    this.cartCount$ = cartService.cartCount$;
    this.onHomePage = router.url.includes('/home');
    this.onCartPage = router.url.includes('/cart');
  }
  ngOnInit(): void {
    if (!!localStorage.getItem('userDetails'))
      this.userDetails = JSON.parse(localStorage.getItem('userDetails') ?? '');
  }
  onLogOut(): void {
    localStorage.removeItem('userDetails');
    this.router.navigate(['/login']);
  }
}
