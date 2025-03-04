import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaLoaderService,
  ReCaptchaV3Service,
} from 'ng-recaptcha-2';

@Component({
  selector: 'app-order-form',
  imports: [FormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss',
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '6Lc5A-gqAAAAAEDGWWc13Q0Qb2i16SRtExPB4eor',
    },
    RecaptchaLoaderService,
    ReCaptchaV3Service,
  ],
})
export class OrderFormComponent {
  person = {
    userName: null,
    phoneNumber: null,
  };
  onClick() {
    this.recaptchaV3Service
      .execute('send_form')
      .subscribe((token) => this.handleToken(token));
  }

  handleToken(token: string) {
    console.log(`And here the token is ${token}`);
    this.onSubmit();
  }

  onSubmit() {
    console.log(JSON.stringify(this.person, undefined, 2));
  }

  constructor(private recaptchaV3Service: ReCaptchaV3Service) {}
}
