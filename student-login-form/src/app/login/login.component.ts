import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  loggedIn: boolean = false;

  submitForm() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    if (this.username === 'student' && this.password === 'password') {
      this.loggedIn = true;
      console.log('Login successful');
      window.location.href = 'https://qualitythought.in';
      // Redirect to a different page or perform any other necessary actions upon successful login
    } else {
      console.log('Invalid username or password');
      // Display an error message or perform any other necessary actions upon unsuccessful login
    }
  }
}
