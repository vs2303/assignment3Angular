import { Component, OnInit } from '@angular/core';
import { DbProviderService } from '../db-provider.service'
import { Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:DbProviderService,private router:Router) { }

  ngOnInit() {
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target
    const id=target.querySelector('#username').value
    const pass=target.querySelector('#password').value
    this.Auth.getUserDetails(id,pass).subscribe(data=>{
      if(data.success){
        //redirect to home
        this.router.navigate(['home'])
        this.Auth.setLoggedIn(true)
      }else{
        alert(data.message)
      }
    })
    console.log(id,pass)
  }
}
