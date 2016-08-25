import {Component, OnInit} from '@angular/core';
import {Validators}  from '@angular/common';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';

import {BBValidators} from '../../validators/bb-validators';
import {User} from '../../models/user.model';

@Component({
    moduleId: module.id,
    selector: 'app-model-form',
    templateUrl: 'model-form.component.html',
    styleUrls: ['model-form.component.css'],
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ModelFormComponent implements OnInit {
    registrationForm: FormGroup;
    user: User;
    submitted: boolean;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        // create new user
        this.user = new User();

        // set submitted to false
        this.submitted = false;

        // create registrationForm validation model
        this.registrationForm = this.buildValidation();
    }

    buildValidation() {
        return this.fb.group({
            // format is key: ['{defaultValue}', [validators])
            username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            email: ['', [Validators.required, BBValidators.email]],
            password: ['', Validators.required],
            comparePassword: ['', [Validators.required, BBValidators.compareEqual('password', true)]]
        });
    }

    registerUser(registrationForm) {
        console.log(registrationForm);

        // set submitted to true
        this.submitted = true;

        if (registrationForm.valid) {
            alert('Form is valid');
        }
    }

    isFieldValid(formGroup: FormGroup, fieldName: string, errorName: string) {
        let control: AbstractControl = formGroup.controls[fieldName],
            show;

        // if the field has errors and the specific error we are lookig for
        show = control.getError(errorName);

        // and the field isn't pristine or the form has been submitted
        show = show && (!control.pristine || this.submitted);

        // then show the validation
        return show;
    }
}
