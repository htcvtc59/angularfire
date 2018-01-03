import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from "@angular/router";

import { AuthGuard } from '../core/auth.guard';
import { CoreModule } from '../core/core.module';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router/src/router';
import { AuthService } from '../core/auth.service';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'notes', component: UserProfileComponent,  canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers:[AuthService],
  declarations: []
})
export class AppRoutingModule { }
