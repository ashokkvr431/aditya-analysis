import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Registration Data:', form.value);
      alert('Registration Successful!');
      form.reset();
    }
  }
}