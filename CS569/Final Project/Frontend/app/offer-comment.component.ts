import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OfferService } from './offer.service';



@Component({
  selector: 'app-add-offer',
  template: `
  <p>
      Thank you! Your comment on this offer has been submitted.
    </p>

    <br/>
    
    <button (click)="onSubmit()" class="button" > OK </button> 
    
  `,
  styles: [
    `
 p{
  left: 200px;
  text-align: center;
  font-weight :700;
  font-size:30px;
}   
    .button {
      left: 50%;
      position: absolute;
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

export class OfferCommentComponent implements OnInit {
  user: any;
  offer:any
  fetchedOffer:any
  private subscription: Subscription[] = []


  constructor(private router :Router,
    private offerService : OfferService
    ) { 
      const navigationState :any = this.router.getCurrentNavigation()?.extras.state
        this.user = navigationState.user;
        this.offer = navigationState.offer;
        console.log(navigationState)
  
    }

  ngOnInit(): void {
    this.subscription[2] = this.offerService.searchOfferById(this.offer._id)
    .subscribe((result:any)=>{
      this.fetchedOffer = result
      console.log(this.fetchedOffer)
    })
  }

  onSubmit(){
      this.router.navigate(['/','offerdetail'],{state:{offer:this.fetchedOffer, user:this.user}})
    // })
  }
  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe())
  }

}
