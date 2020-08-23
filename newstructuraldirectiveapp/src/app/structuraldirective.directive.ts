import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[showeme]'
})
export class StructuraldirectiveDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }
    
      @Input() set showeme(shouldAdd: boolean) {
      if (shouldAdd) {
                this.viewContainer.createEmbeddedView(this.templateRef);
      } else {

        this.viewContainer.clear();
      }
    }

}
