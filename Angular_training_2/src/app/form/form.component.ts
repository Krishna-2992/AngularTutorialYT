import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface User {
  name: string, 
  email: string
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  user: User = {
    name: '',
    email: ''
  }

  submitForm(form: NgForm) {
    if(form.valid) {
      console.log(form.value, this.user);
    }
  }

  validateEmail(): boolean {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(this.user.email)
  }
}
