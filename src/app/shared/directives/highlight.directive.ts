import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective implements AfterViewInit{

  @Input() highlight = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2){
  }

  ngAfterViewInit(): void {
    this.setBackGroundColor(this.highlight);
  }

  setBackGroundColor(color: string){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
