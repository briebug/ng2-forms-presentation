import {Directive} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';

import {BBValidators} from '../validators/bb-validators';

@Directive({
    /* tslint:disable:directive-selector-name */
    selector: '[validateEmail][ngModel],[validateEmail][formControl],[validateEmail][formControlName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useValue: BBValidators.email,
            multi: true
        }
    ]
})
export class EmailValidatorDirective {}
