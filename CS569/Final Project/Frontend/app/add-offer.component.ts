import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OfferService } from './offer.service';


@Component({
  selector: 'app-add-offer',
  template: `
<nav>
   <form [formGroup]="addOfferForm" (ngSubmit)="onSubmit()" >
  
  <div class = "form-group">
    <label for = "offercontent" >Content: </label>
    <input type = "text" class ="form-control" id ="offercontent" formControlName = "content" placeholder="Offer Content">
  </div>
  <br/>
  <div class = "form-group">
    <label for = "offerdescription" >Description: </label>
    <input type = "text" class ="form-control" id ="offerdescription" formControlName = "description" placeholder="Offer Description">
  </div>
  <br/>
 
  <div class = "form-group">
  <label for = "price" >Price: </label>
    <input type = "text" class ="form-control" id ="price" formControlName = "price" placeholder="Offer Price">
  
  </div>
  <br/>

  <button type="submit" class="button" >Add Offer</button>  
</form>
    
  `,
  styles: [
    `
    input{
  position: fixed;
  left: 200px;
  width: 20%;
}

    .button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`
  ]
})
export class AddOfferComponent implements OnInit {
  user: any;
  addOfferForm: FormGroup;
  private subscription: Subscription[] = []


  constructor(private formBuilder : FormBuilder,
    private router :Router,
    private offerService : OfferService
    ) { 
      const navigationState :any = this.router.getCurrentNavigation()?.extras.state
        this.user = navigationState.user
        // console.log(this.user)
  
      this.addOfferForm = formBuilder.group({
        content: [''],
        description: [''],
        longitude: [''],
        latitude: [''],
        postedTime: [''],
        status: [''],
        price: [''],
        comments: [''],
        offeringMember: [''],
      })
      this.subscription[0] = this.addOfferForm?.valueChanges.subscribe((result:any)=>{
      console.log(result)
})
    }

  ngOnInit(): void {
  }

  onSubmit(){
    const rawOffer = this.addOfferForm.value;
    const postedTime : any = new Date();
    const status : string = "Open";
    const comments : any []= [];
    const offeringMember : any = this.user
    const finalOffer = {...rawOffer, postedTime, status, comments, offeringMember}
    this.subscription[1] = this.offerService.addOffer(finalOffer).subscribe((result:any)=>{
      // console.log(result)
      this.router.navigate(['/','lists'],{state:{user:this.user}})
    })
  }
  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe())
  }

}
