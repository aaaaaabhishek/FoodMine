import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(private authService:AuthService){}
    onSignup(): void {
      this.authService.signup(this.name,this.email,this.password).subscribe(
        response => {
          // Handle successful signin response (optional)
          console.log('Signin successful', response);
          // Redirect or perform any other actions as needed
        },
        error => {
          // Handle error response (optional)
          console.error('Signup error', error);
          // Display an error message or perform any other error handling
        }
      );
    }}
