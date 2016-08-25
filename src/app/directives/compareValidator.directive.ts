import {Directive, Attribute, forwardRef} from '@angular/core';
import {NG_VALIDATORS, AbstractControl} from '@angular/forms';

import {BBValidators} from '../validators/bb-validators';

@Directive({
    /* tslint:disable:directive-selector-name */
    selector: '[validateEqual][ngModel],[validateEqual][formControl],[validateEqual][formControlName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() =>
                EqualValidatorDirective),
            multi: true
        }
    ]
})
export class EqualValidatorDirective {
    validator: Function;

    constructor(@Attribute('validateEqual') validateEqual: string,
                @Attribute('reverse') public reverse: string) {
        this.validator = BBValidators.compareEqual(validateEqual, reverse);
    }

    validate(control: AbstractControl) {
        return this.validator(control);
    }
}
