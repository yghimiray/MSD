import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SignUpComponent } from './sign-up.component';
import { ListsComponent } from './lists.component';
import { OfferDetailComponent } from './offer-detail.component';
import { RequestDetailComponent } from './request-detail.component';
import { AddOfferComponent } from './add-offer.component';
import { AddRequestComponent } from './add-request.component';
import { EditOfferComponent } from './edit-offer.component';
import { EditRequestComponent } from './edit-request.component';
import { EditUserComponent } from './edit-user.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestApplyComponent } from './request-apply.component';
import { RequestClosedComponent } from './request-closed.component';
import { OfferCommentComponent } from './offer-comment.component';
import { RequestCommentComponent } from './request-comment.component';
import { AllUsersComponent } from './all-users.component';
import { UserDetailComponent } from './user-detail.component';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { AuthGuardGuard } from './auth-guard.guard';
import { ChangeColorDirective } from './change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    ListsComponent,
    OfferDetailComponent,
    RequestDetailComponent,
    AddOfferComponent,
    AddRequestComponent,
    EditOfferComponent,
    EditRequestComponent,
    EditUserComponent,
    RequestApplyComponent,
    RequestClosedComponent,
    OfferCommentComponent,
    RequestCommentComponent,
    AllUsersComponent,
    UserDetailComponent,
    ChangeColorDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'users', component: AllUsersComponent},
      {path: 'signup', component: SignUpComponent},
      {path: 'lists', component: ListsComponent,canActivate:[AuthGuardGuard]},
      {path:'addoffer', component: AddOfferComponent,canActivate:[AuthGuardGuard]},
      {path:'addrequest', component: AddRequestComponent,canActivate:[AuthGuardGuard]},
      {path:'offerdetail', component: OfferDetailComponent,canActivate:[AuthGuardGuard]},
      {path:'userdetail', component: UserDetailComponent,canActivate:[AuthGuardGuard]},
      {path:'offercomment', component: OfferCommentComponent,canActivate:[AuthGuardGuard]},
      {path:'requestcomment', component: RequestCommentComponent,canActivate:[AuthGuardGuard]},
      {path:'requestdetail', component: RequestDetailComponent,canActivate:[AuthGuardGuard]},
      {path:'applytorequest', component: RequestApplyComponent,canActivate:[AuthGuardGuard]},
      {path:'requestclosed', component: RequestClosedComponent,canActivate:[AuthGuardGuard]},
      {path: '**', component: HomeComponent},
    ])
    // , { onSameUrlNavigation: 'reload' }
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
