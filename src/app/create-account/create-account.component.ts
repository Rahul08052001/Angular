import { Component, OnInit } from '@angular/core';
import { UserFrontEnd } from '../user-front-end';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
user = new UserFrontEnd();
msg = "";
  constructor(private service : RegistrationService, private router : Router,
    private http:HttpClient ) {
      
    }

  ngOnInit(): void {
  }

    createAccount(){
      this.service.creatUserAccount(this.user).subscribe(
        data => {
          alert("Account Successfully created...");
          this.msg = "Account Successfully created...";
          this.router.navigate(["./login"])
        },
        error=>{
          this.msg = "Exception Occured";
          alert("Account already created...");
        }
      )
    }
}
