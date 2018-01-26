import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../services/user.service.ts';

@NgModule({
  imports: [CommonModule],
  providers: [UserService],
  declarations: []
})
export class UserDemoModule {

}
