import { NgModule } from '@angular/core';
// import { NgRedux, NgReduxModule  } from '@angular-redux/store';
import { IAppstate, rootReducer, initialState } from './store';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PurchaseComponent } from './purchase.component';
import { SalesComponent } from './sales.component';
import { PaymentsComponent } from './payments.component';
import { ReceiptComponent } from './receipt.component';
import { ReportsComponent } from './reports.component';
import { PartyComponent } from './party.component';
import { ItemComponent } from './item.component';
import { InventoriesComponent } from './inventories.component';
import { PartiesComponent } from './parties.component';
import { BillComponent } from './bill.component';
import { PurchasereturnComponent } from './purchasereturn.component';
import { SalesreturnComponent } from './salesreturn.component';
import { JournalComponent } from './journal.component';
import { ControlGuard } from './control.guard';
import { ControlInterceptor } from './control.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PurchaseComponent,
    SalesComponent,
    PaymentsComponent,
    ReceiptComponent,
    ReportsComponent,
    PartyComponent,
    ItemComponent,
    InventoriesComponent,
    PartiesComponent,
    BillComponent,
    PurchasereturnComponent,
    SalesreturnComponent,
    JournalComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // NgReduxModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'purchase', component: PurchaseComponent,canActivate:[ControlGuard]},
      {path: 'purchasereturn', component: PurchasereturnComponent,canActivate:[ControlGuard]},
      {path: 'sales', component: SalesComponent,canActivate:[ControlGuard]},
      {path: 'salesreturn', component: SalesreturnComponent,canActivate:[ControlGuard]},
      {path: 'payment', component: PaymentsComponent,canActivate:[ControlGuard]},
      {path: 'receipt', component: ReceiptComponent,canActivate:[ControlGuard]},
      {path: 'reports', component: ReportsComponent,canActivate:[ControlGuard]},
      {path: 'party', component: PartyComponent,canActivate:[ControlGuard]},
      {path: 'item', component: ItemComponent,canActivate:[ControlGuard]},
      {path: 'inventories', component: InventoriesComponent,canActivate:[ControlGuard]},
      {path: 'allparties', component: PartiesComponent,canActivate:[ControlGuard]},
      {path: 'item', component: ItemComponent,canActivate:[ControlGuard]},
      {path: 'bill', component: BillComponent,canActivate:[ControlGuard]},
      {path: 'journal', component: JournalComponent,canActivate:[ControlGuard]},
      {path: '**', component: HomeComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ControlInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { 

// constructor (ngRedux: NgRedux<IAppstate>){
//   ngRedux.configureStore(rootReducer, initialState)
// } 

}
