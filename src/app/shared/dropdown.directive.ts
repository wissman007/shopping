
import {Directive, Input, HostListener, ElementRef, Renderer2, HostBinding} from "@angular/core";
@Directive({
  selector: '[appDropDown]'

})

export class  DropDownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2){
  }

  @HostListener('click') toggleOpen(dataEvent: Event){
    this.isOpen = ! this.isOpen;


  }
}
