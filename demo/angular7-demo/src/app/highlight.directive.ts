import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;
  // @Input() highlightColor: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef) { 
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor|| this.defaultColor || 'pink');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  @HostListener('click') onMouseClick() {
    this.highlight("black");
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.textAlign= "center";
  }
}
