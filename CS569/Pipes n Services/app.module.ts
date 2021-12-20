import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { PhonePipe } from './phone.pipe';
import { RouterModule } from '@angular/router';
import { UserCardComponent } from './user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PhonePipe,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: UserComponent, children : [
        {path: ':email', component: UserCardComponent}
      ]},
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
