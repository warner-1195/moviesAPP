import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    `
      .position{
        margin-left: 46%;
      }

      

      .size{
        width: 30%;
        background-color: rgb(41, 37, 37);
      }

      mat-form-field{
        width: 100%;
      }

      .input-color{
        color: #ffc107;
      }

      mat-label{
        color: #ffc107;
      }

      h2{
        color: #ffc107;
      }

      a, span{
        margin-left: 2%;
        text-decoration: none;
        color: yellow;
      }
    `
  ]
})
export class RegisterComponent  {


  registerForm : FormGroup = this.fb.group({

    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(7)]]
  })

  constructor(private fb : FormBuilder,
              private as: AuthService,
              private router: Router) { }


  inputNoValid( input : string){
    return this.registerForm.get(input)?.invalid 
    && this.registerForm.get(input)?.touched;
  }

  register(){

    const {name,lastname,email,password} = this.registerForm.value;

    this.as.register(name,lastname,email,password)
        .subscribe( ok => {

          if(ok === true){
            this.router.navigate(['./movies/movies-list']);
          }else{
            Swal.fire('Error', 'The email entered is already in use' , 'error')
          }
        })
    
     

    this.registerForm.markAllAsTouched();
    
  }

}
