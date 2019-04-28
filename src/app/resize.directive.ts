/**
 * This directive captures a <textarea> html element using "inputResize" attribute
 *    usage example: <textarea inputResize></textarea>
 * This directive then emits event(resize) if the box is resized
 */

import { Directive, Output, EventEmitter, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: 'textarea[inputResize]'
})
export class ResizeDirective {
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  @Output() resize = new EventEmitter();
  width: number;
  height: number;
  mouseMoveListener;

  /**
   * when mouse is "pressed && moved", only then emit "resize" event
   * with latest width and height of the element
   */
  @HostListener('mousedown')
  onMouseDown(el: HTMLElement) {
    this.mouseMoveListener = this.renderer.listen('document', 'mousemove',
      () => this.resize.emit({width: this.element.nativeElement.offsetWidth,
                         height: this.element.nativeElement.offsetHeight
                        })
    );
  }

  /**
   * the renderer  subscribed to 'mousemove' event, in above function (onMouseDown)
   * so it will keep listening to that event, making unnecessary calculation of width and height
   * To prevent it, on mouse up, remove the lister
   */
  @HostListener('mouseup')
  onmouseup() {
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
    }
  }

}
