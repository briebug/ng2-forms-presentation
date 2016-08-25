import {AbstractControl} from '@angular/forms';

export class BBValidators {

    static email(control: AbstractControl): {[key: string]: boolean} {
        /* tslint:disable:max-line-length */
        let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

        if (!control.value) {
            return null;
        }

        return EMAIL_REGEXP.test(control.value) ?
            null : {'email': true};
    }

    static compareEqual(validateEqual: string, reverse: any) {
        return (control: AbstractControl): { [key: string]: any } => {
            let isReverse = String(reverse).toLowerCase() === 'true';

            // self value (e.g. retype password)
            let rootValue = control.value;

            // control value (e.g. password)
            let compareField = control.root.find(validateEqual);

            if (compareField && rootValue !== compareField.value  && !isReverse) {
                return {validateEqual: true};
            }

            // value equal and reverse
            if (compareField && rootValue === compareField.value && isReverse) {
                delete compareField.errors['validateEqual'];

                // if there are no errors, then set errors to null
                if (!Object.keys(compareField.errors).length) {
                    compareField.setErrors(null);
                }
            }

            // value not equal and reverse
            if (compareField && rootValue !== compareField.value && isReverse) {
                compareField.setErrors({ validateEqual: true });
            }

            return null;
        };
    }
}
