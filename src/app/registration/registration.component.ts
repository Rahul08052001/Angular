import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Route, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { UserFrontEnd } from '../user-front-end';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new UserFrontEnd();
  msg = ""

  constructor(private service : RegistrationService , private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data =>{
      console.log("Succesfully Registered");
      alert("Successfully Registered...");
      this.msg = "Registration Sucesfull";
      // this.router.navigate(["./login"])
      this.router.navigate(["./createAccount"])
      },
      error =>{
        console.log("Exception Occured");
        this.msg = "Exception Occured";
        alert("Are you trying to enter duplicate Value or Login");


      }
    )
  }
  gotologin(){
    this.router.navigate(["/login"])
  }
}
