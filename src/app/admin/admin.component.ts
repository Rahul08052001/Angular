import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient) { }

  user:any;

  ngOnInit(): void {
    this.getuser();
  }

  getuser(){
    let response = this.http.get("http://localhost:9000/getalluser");
    response.subscribe((data) => this.user = data)
  }

  ApproveStatus(id : number){
    this.http.get("http://localhost:9000/setstatus/" + id).subscribe((data) => this.user = data);
    console.log(id);
    this.getuser();

  }
  rejectStatus(id : number){
    this.http.get("http://localhost:9000/rejectstatus/" + id).subscribe((data) => this.user = data);
    this.getuser();
  }

  // updateUser(id:number){
  //   this.http.get("http://localhost:9000/UpdateUser/" + id).subscribe((data) => this.user = data)
  //   this.getuser();
  // }

  deleteUser(id:number){
    this.http.delete("http://localhost:9000/deletebyid/" + id).subscribe((data) => this.user = data)
    this.getuser();
  }

}
