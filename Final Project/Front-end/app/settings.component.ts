import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA , MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SNSService } from './sns.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-settings',
  template: `
   <div  id="modal-content-wrapper">
   <header id="modal-header">
        <h1 style="color: white;" id="modal-title">Update User Information</h1>
    </header>
    <section id="modal-body">
    <div *ngIf=" !showForm" >
    <label style="color: white;" for = "updateUsername" >Username: </label>
      <input style="margin-left:25px" type = "text" name='updateUsername' id ="updateUsername" (keyup)="change($event)" placeholder="Username">
      <button style="color: white;margin-left:20px" mat-raised-button id="modal-action-button" (click)="ok()">OK</button>  
      <button style="color: white;margin-left:100px" mat-raised-button id="modal-close-button" (click)="close()" >Close</button>
    </div>  
    
    <div *ngIf="showForm" class = "form-group">
    <div>
    <form [formGroup]="updateForm" >
      <div class = "form-group">
      <label style="color: white;" for = "fullName" >Full Name: </label>
      <input  style="margin-left:25px" type = "text" class ="form-control" id ="fullName" formControlName = "fullname" placeholder="Full Name">
      </div>
      <br/>
      <div class = "form-group">
      <label style="color: white;" for = "signUpPassword" >Password: </label>
      <input  style="margin-left:25px" type = "password" class ="form-control" id ="signUpPassword" formControlName = "password" placeholder="Password">
      </div>
      <br>
      <div class = "form-group">
      <label style="color: white;" for = "email" >Email: </label>
      <input style="margin-left:55px" type = "text" class ="form-control" id ="email" formControlName = "email" placeholder="Email">
      </div>
      <br>
      <div class = "form-group">
      <label style="color: white;" for = "role" >Role: </label>
      <input style="margin-left:60px" type = "text" class ="form-control" id ="role" formControlName = "role" placeholder="Role">
      </div>
      <br>
      <button style="color: white; margin-left:95px" mat-raised-button id="modal-action-button" (click)="confirm()">Confirm</button>
        <button style="color: white;margin-left:35px" mat-raised-button id="modal-close-button" (click)="close()" >Close</button>
    </form>
  </div>
  </div>
  <p style="color: white ;margin-left:125px" >{{message}}</p>

</section>
    </div>
  `,
  styles: [
    `
    #modal-content-wrapper {
      /* margin-top:70px; */
      background-color:green;
      /* position: fixed;
      top:0;
      right:0;
      bottom:60;
      left:90; */
      /* width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(1fr, 3); */
}

#modal-title {
    font-size: 22px;
}

#modal-footer {
    justify-self: right;
    align-self: center;
}

#modal-action-button {
    /* margin-right: 30px; */
    background-color:#3b3b3b;
}

#modal-cancel-button {
    background-color: #4e4e4e;
}
#modal-close-button {
    background-color: #4e4e4e;
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
export class SettingsComponent implements OnInit {
  role:any = localStorage.getItem('role')
  username: string = ''
  loggedUsername: any = localStorage.getItem('username')
  message: string = ''
  user:any;
  showForm:boolean = false
  updateForm:FormGroup;
  private subscription : Subscription [] = [];

  constructor(private formBuilder : FormBuilder,
    private router : Router,
    private userService : UserService,
    private snsService : SNSService,
    public matDialogRef: MatDialogRef<MatDialog>
    ){
    this.updateForm = formBuilder.group({
      'fullname':[''],
      // 'username':[''],
      'password':[''],
      'email':[''],
      'role':['']
    })
    this.subscription[0]= this.updateForm?.valueChanges.subscribe((result:any)=>{
      console.log(result)
    })

  }


  confirm(){
    if(this.role !== 'admin'){
      this.message = "Your request has been sent to Admin for updating"
      // this.subscription[3] = this.snsService.snsMessage(this.user).subscribe((result:any)=>{
      //   console.log(result)
      // })
    }
      const tempUser = this.updateForm.value;
      const userRole = this.role
      this.user = {...tempUser, userRole}
      console.log(this.updateForm.value)
      this.subscription[1] = this.userService.updateUser(this.username, this.user).subscribe((result:any)=>{
        console.log(result)
      })
  
  }

  cancel(){
    this.router.navigate(['/','purchase'])
  }

  change(event:any){
    this.username = event.target.value;
    console.log(this.username)
    // console.log(this.loggedUsername)
  }

  ok(){
    if(this.role !== 'admin' && this.username !== this.loggedUsername){
      this.message = "Your username does not match"
    }else{
      this.subscription[1] = this.userService.searchUserByUsername(this.username).subscribe((result:any)=>{
        this.user = result;
        console.log(this.role)
        this.showForm = true
      })
    }

  }

  close(){
this.matDialogRef.close()
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe())
  }

}
