import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-offer',
  template: `
    <p>
      edit-offer works!
    </p>
  `,
  styles: [
    `
    
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
export class EditOfferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
