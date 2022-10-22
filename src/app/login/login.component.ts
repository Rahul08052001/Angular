import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { UserFrontEnd } from '../user-front-end';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new UserFrontEnd();
 msg = ""
 

  constructor(private servcie : RegistrationService ,private router : Router) { }

  ngOnInit(): void {
  }

  MyCntrl($scope) {
    console.log($scope.user.status);
}

  loginUser(){
this.servcie.loginUserFromRemote(this.user).subscribe(
  data =>{ 
    console.log("Data Abhi Print hoga")
    console.log(this.user.status);
    console.log(this.user.firstName);
    console.log(this.user);
    console.log("EmailID Abhi print hoga");
   if(this.user.emailID == "admin@gmail.com" && this.user.password == "admin"){
    this.router.navigate(["admin"]);
   }else{
    console.log("Response Received");
    this.router.navigate(["/home"]) }
   },
  error =>{ console.log("Exception Occured");
  this.msg = "Bad Credential";
  alert("Bad Credential")
  }
)
  }

  gotoregistration(){
    this.router.navigate(["/register"])
  }
}
