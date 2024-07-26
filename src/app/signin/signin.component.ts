import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService,private router:Router) {}
  onSignin(): void {
    this.authService.signin(this.email, this.password).subscribe(
      response => {
        if(response)
        // // Handle successful signin response (optional)
        // console.log('Signin successful', response);
        // // Redirect or perform any other actions as needed
        this.router.navigate(['/home']); 
      },
      error => {
        // Handle error response (optional)
        console.error('Signin error', error);
        // Display an error message or perform any other error handling
      }
    );
    
  }
}