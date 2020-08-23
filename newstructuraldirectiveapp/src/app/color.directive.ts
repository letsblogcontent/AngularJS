import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {



    constructor(el: ElementRef, renderer: Renderer) {
      // Use renderer to render the element with styles
        renderer.setElementStyle(el.nativeElement, 'color', 'red');
     }

}
