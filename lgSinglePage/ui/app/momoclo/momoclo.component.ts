import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DialogModule } from 'primeng/primeng';


@Component({
    moduleId: module.id,
    //selector: 'broker',
    //template: '<p>This is a template for momoclo page</p>'
    templateUrl: 'momoclo.component.html'
})
export class MomocloComponent {
    // @Input('group')
    public form: FormGroup;
    p: any;
    displayConfirm : boolean;
    temp: any;

    @Input()
    suggestions: any[];

    onConfirm(){
        this.form.patchValue(this.temp);
        this.displayConfirm = false;
        this.temp =null;
    }

    onCancel(){
        this.displayConfirm = false;
        this.temp = null;
    }
}