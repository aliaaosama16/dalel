import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log('element : ' + this.el);
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
