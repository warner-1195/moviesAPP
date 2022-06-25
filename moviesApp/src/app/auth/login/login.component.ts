import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      a{
        margin-left: 2%;
        text-decoration: none;
        color: yellow;
      }
      h1{
        color: #ffc107;
      }

      .size{
        width: 20%;
        background-color: rgb(41, 37, 37);
      }

      mat-form-field{
        width: 100%;

      }

      mat-label{
        color: #ffc107;
      }

      .input-color{
        color: #ffc107;
      }

    `
  ]
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = this.fb.group({
    email:[ 'test1@test.com', [Validators.required, Validators.email]],
    password: ['1234567', [Validators.required, Validators.minLength(7)]]
  })

  constructor( private router : Router,
               private authService : AuthService,
               private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    
    console.log(this.loginForm.value)
    const {email, password} = this.loginForm.value;
    
    this.authService.login(email,password)
    .subscribe(ok => {
      if(ok === true ){
       this.router.navigate(['./movies/movies-list'])
      }else{
        Swal.fire('Error', 'You have entered invalid values!' , 'error')
      }
    })
   

  }

  
  emailValid(){
    return true;
  }


  passwordValid(){
    return true;
  }

}
