import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute,private http:HttpClient, private router : Router) { }
  getUserId:any;

user:any = {id: "",
  firstName : "",
  lastName :"" ,
  emailID : "" ,
  address : "" ,
  govtId : "" ,
  phoneNumber : "" ,
  dob: ""  , 
  password : "" ,
  status : ""
}

getByUserNo(id:any){
  this.http.get("http://localhost:9000/getbyid/ " + id).subscribe((data) => this.user = data);
}



  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get("id"));
      this.getUserId = id;
    })
    this.getByUserNo(this.getUserId);
  }

  updateUser(user:any,id:any){
    this.http.put("http://localhost:9000/UpdateUser/"+id,user,{responseType:'text'as 'json'})
    .subscribe((data:any) => this.user=data )
    this.router.navigate(['/admin'])
  }

}
