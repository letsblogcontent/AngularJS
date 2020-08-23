import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[showhide]'
})
export class StructuraldirectiveDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }
    
      @Input() set myIf(shouldAdd: boolean) {
      if (shouldAdd) {
                this.viewContainer.createEmbeddedView(this.templateRef);
      } else {

        this.viewContainer.clear();
      }
    }

}
