import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButtonStyle]'
})
export class ButtonStyleDirective {

  // element!: ElementRef
  constructor(private element: ElementRef) {
    // this.element = element
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'yellow'
    this.element.nativeElement.style.color = 'black'
  }

}
