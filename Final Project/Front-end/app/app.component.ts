import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA , MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SettingsComponent } from './settings.component';

@Component({
  selector: 'app-root',
  template: `
  <h1>Inventory Accounting System &reg; </h1>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<a (click)="settings()" ><i class="fa fa-gear fa-spin" style="font-size:36px;"></i></a>
<button (click)="LogOut()" class="button"> Logout>></button>
<p style="color: red; position:absolute; left: 80%; font-size: 30px" >{{message}}</p>
<div style="border-bottom: 10px solid green"></div>

<router-outlet></router-outlet>


  `,
  styles: [
    `
h1 {
   margin: 0;
   display: inline-block;
   color:green;
}
.button {
  /* left:65%; */
  /* position:relative; */
  float: right;
  display: inline-block;
  padding: 10px 15px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: red;
  border: none;
  border-radius: 15px;
  box-shadow: 0 2px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

a{
  left:90%;
  position:absolute;
  float: right;
  display: inline-block;
  cursor: pointer;
  
}
mat-dialog-container#settingsComponent {
    border: 3px solid #262626;
    border-radius: 11px;
    background-color: #1a1a1a;
}
html, body {
    height: 100%;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: #3a3a3a;
}

`
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  role:any = localStorage.getItem('role')
  user:any = localStorage.getItem('user')
  message:string= ''
  constructor(private router: Router,
    public matDialog: MatDialog
  ) {

  }


  ngOnInit() {
    console.log(this.role)
  }

  LogOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('role')
    localStorage.removeItem('username')
    this.router.navigate(['/', 'home'])
  }

  settings() {
    const token = localStorage.getItem('token');
    console.log(this.role)
    if(!token){
      this.message = "Please login first !"
      
      setTimeout(() => {
        this.message = ""
      }, 3000);
    
    }else{
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "settings-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(SettingsComponent, dialogConfig);

    }
  }


  ngOnDestroy() {
  }

}

