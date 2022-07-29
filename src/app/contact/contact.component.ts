import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  firstname: string='';
  lastname:string='';
  email: string='';
  message: string='';
  emailnews: string='';


  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    const message=`Thank you for visting our website ${this.firstname}`;
    alert(message);
  }
  subscribenewsletter(){
    alert("Thank you for subscribing to our newsletter you will receive all our updates on your email .");
  }
}
