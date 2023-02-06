import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDiretiva]'
})
export class DiretivaDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color= '#000000'
   }

}
