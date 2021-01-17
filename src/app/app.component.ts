import { getCurrentUserAction } from './auth/store/actions/getCurrentUser.action';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    console.log(123);
    this.store.dispatch(getCurrentUserAction());
  }
}
