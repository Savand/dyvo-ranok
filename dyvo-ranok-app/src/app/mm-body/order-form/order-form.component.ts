
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  imports: [FormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent {

  person = {
    userName: null,
    phoneNumber: null,
  };

  onSubmit() {
    console.log(JSON.stringify(this.person, undefined, 2));
  }

}
