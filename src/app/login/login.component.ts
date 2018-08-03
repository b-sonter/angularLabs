import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string =''
  password:string =''

  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
  }

  logingUser(event){
    event.preventDefault();
    if (this.username == "Brianna" && this.password == "1234"){
      this.router.navigateByUrl("/account"):
    }
    else{
      alert("Username and password are incorrect");
    }
  }

}
