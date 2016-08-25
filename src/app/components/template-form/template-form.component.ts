import {Component, OnInit} from '@angular/core';

import {EmailValidatorDirective} from '../../directives/emailValidator.directive';
import {EqualValidatorDirective} from '../../directives/compareValidator.directive';
import {User} from '../../models/user.model';

@Component({
    moduleId: module.id,
    selector: 'app-template-form',
    templateUrl: 'template-form.component.html',
    styleUrls: ['template-form.component.css'],
    directives: [EmailValidatorDirective, EqualValidatorDirective]
})
export class TemplateFormComponent implements OnInit {
    user: User;

    constructor() {
    }

    ngOnInit() {
        this.user = new User();
    }

    registerUser(registrationForm, email) {
        console.log(registrationForm, email);

        if (registrationForm.valid) {
            alert('Form is valid');
        }
    }

    isFieldValid(form, field, errorName: string) {
        let show;

        // if the field has errors and the specific error we are lookig for
        show = (field.errors && field.errors[errorName]);

        // and the field isn't pristine or the form has been submitted
        show = show && (!field.pristine || form.submitted);

        // then show the validation
        return show;
    }
}
