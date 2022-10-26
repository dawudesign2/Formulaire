import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Order } from '../models/order.models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  model : Order = new Order('', 0, new Date(), '');

  submitted = false;

  onSubmit(): void {
    console.log(this.model);
    this.submitted = true;
  }

  ngOnInit(): void {
  }

}
