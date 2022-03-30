import { Injectable , InjectionToken, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';

export const DOCUMENT = new InjectionToken<Document>('__DOCUMENT__')
export const SET_INTERVAL = new InjectionToken<typeof setInterval>('__SET_INTERVAL__')

@Injectable()
export class TimerService {
  constructor(@Inject(DOCUMENT) public document: object,
              @Inject(SET_INTERVAL) public setInterval) {}

  public start() {
    const timerOutputElement = document.querySelector('#timer-output');
    let counter: number = 0;
    setInterval(() => {
      timerOutputElement.innerHTML = `${counter++}`;
    }, 1000);
  }
}
