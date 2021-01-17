import { BackendErrorMessagesComponent } from './components/backendErrorMessages/backendErrorMessages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessagesComponent],

  exports: [BackendErrorMessagesComponent],
})
export class BackendErrorMessagesModule {}
