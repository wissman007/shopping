import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onSignUp(form: NgForm){
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
  }
}
