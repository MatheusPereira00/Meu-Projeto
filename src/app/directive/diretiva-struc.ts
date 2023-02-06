import { Directive } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class DiretivaStrucDirective {

  constructor() {
    console.log('myFor');
   }

}
