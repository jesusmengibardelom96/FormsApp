import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';
import { ValidatorService } from '../../../shared/service/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required , customValidators.cantBeStrider ]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    validators: [
      this.validatorService.isFieldOneEqualsFieldTwo('password', 'password2')
    ]
  });

  constructor(private fb: FormBuilder, private validatorService:ValidatorService, private emailValidator: EmailValidatorService) {}

  isValidField (field: string) {
    return this.validatorService.isValidField(this.myForm, field)
  }

  onSubmit() {
    this.myForm.markAllAsTouched()
  }
}
