import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder) { 
  }
  ngOnInit(): void {
    this.createFormLogin();

  }
  createFormLogin(){
    this.login = this.fb.group({
      email:['',[Validators.required]],
      password:['', [Validators.required]]
    })
  }

  iniciarSession(){

  }
  openRegister(){

  }
  

  get form(){
    return this.login;
  }
}

