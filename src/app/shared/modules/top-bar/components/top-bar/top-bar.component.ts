import { Store, select } from '@ngrx/store';
import { CurentUserInterface } from './../../../../types/currentUser.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  isLoggedInSelector,
  isAnonymousSelector,
  currentUserSelector,
} from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurentUserInterface>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
