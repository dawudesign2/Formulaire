import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  model : User = new User('', '', '');

  submitted = false;

  onSubmit(): void {
    console.log(this.model);
    this.submitted = true;
  }

  ngOnInit(): void {
  }

}
