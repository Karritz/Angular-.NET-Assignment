import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {

  @Output() validLogin = new EventEmitter<boolean>();

  username: string  = '';
  validUsername: boolean = true
  password: string = '';
  validPassword: boolean = true;

  validateUsername (value: any) {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    this.validUsername = regex.test(value);
  }


  validatePassword (value: string) {
    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/g;
    this.validPassword = regex.test(value);
  }

  validateLogin() {
    this.validateUsername(this.username);
    this.validatePassword(this.password);
    if (this.validPassword && this.validUsername) {
      this.validLogin.emit(true);
    }
  }

}
