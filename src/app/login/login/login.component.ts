import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any={
    "userName": "",
  "userPassword": ""
  }
constructor(private http:HttpClient,private router:Router){

}
ngOnInit(): void {

}
onlogin(){
  this.http.post('https://onlinetestapi.gerasim.in/api/Ecomm/Login',this.login).subscribe((result:any)=>{
  localStorage.setItem('logusername',JSON.stringify(result.data));
  if(result.result)

  {
    this.router.navigateByUrl('dashboard')
  }else {
    alert(result.message)
  }
  })
    }

}
