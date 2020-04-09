import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private _registrationService: RegistrationService) { }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.loginForm.value);
    this._registrationService.login(this.loginForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );

}
}
