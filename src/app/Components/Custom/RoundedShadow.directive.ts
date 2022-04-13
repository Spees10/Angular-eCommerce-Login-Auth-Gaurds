import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[RoundedShadow]',
})
export class RoundedShadowDirective implements OnChanges {
  @Input() bgColor: string = 'tomato';

  constructor(private elemRef: ElementRef) {
    // this.elemRef.nativeElement.style.border = `5px solid ${this.bgColor}`;
  }

  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border = `5px solid ${this.bgColor}`;
  }

  @HostListener('mouseout') onLoadListen() {
    this.elemRef.nativeElement.style.boxShadow = ` 10px 5px 5px ${this.bgColor}`;
  }
  @HostListener('mouseover') onMouseListen() {
    this.elemRef.nativeElement.style.boxShadow = ` 20px 6px 6px ${this.bgColor}`;
  }
}
