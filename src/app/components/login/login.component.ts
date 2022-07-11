import { Component, OnInit } from '@angular/core';
import { Auth } from './Auth';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = new Auth("admin@ppl.com", "Admin@123")
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log(data);
    if (data.email===this.loginData.email && data.password===this.loginData.password){
      this.router.navigate(['/workflow-list']);
    }
    else{
      alert("Please re-enter your email id and password")
    }
  }

}
