import { Injectable } from '@angular/core';

@Injectable()
export class TwilioService {
  Twilio: any;
  constructor() {
    this.Twilio = window['Twilio'];
   }

}
