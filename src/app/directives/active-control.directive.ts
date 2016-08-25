import {Directive, Host, OnDestroy, Input, OnInit} from '@angular/core';
import {ControlContainer} from '@angular/forms';

@Directive({
    selector: '[activeControl]'
})
export class ActiveControlControlDirective implements OnInit, OnDestroy {
    @Input() npControl: string;

    constructor(@Host() private _parent: ControlContainer) {
    }

    ngOnInit(): void {
        setTimeout(() => this.formGroup.form.include(this.npControl));
    }

    ngOnDestroy(): void {
        this.formGroup.form.exclude(this.npControl);
    }

    get formGroup(): any {
        return this._parent;
    }
}
