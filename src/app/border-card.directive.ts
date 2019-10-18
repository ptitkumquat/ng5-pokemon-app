import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]' 
})
export class BorderCardDirective {

    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#739913';
    private defaultHeight: number = 190;


	constructor(private el: ElementRef) {
		this.setBorder(this.initialColor);
		this.setHeight(this.defaultHeight);
    }

    
    @Input('pkmnBorderCard') borderColor: string; //alias
    // @Input() pkmnBorderCard: string; //sans alias 

    @HostListener('mouseenter') onMouseEnter(){
      this.setBorder(this.borderColor || this.defaultColor);  
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder('#f5f5f5');
    }

	private setBorder(color: string) {
		let border = 'ridge 6px ' + color;
		this.el.nativeElement.style.border = border;
	}

	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
    }
    
}