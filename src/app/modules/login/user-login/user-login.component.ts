import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  LoginForm=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.pattern('[-_a-zA-Z0-9]*')]),
    name:new FormControl('',[Validators.required,Validators.pattern('[-_a-zA-Z]*')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  });

  formSubmitted()
  {
    this.LoginForm.reset();
    alert('loginsuccessful')
  }

  resetdata()
  {
    this.LoginForm.reset();
  }
}
