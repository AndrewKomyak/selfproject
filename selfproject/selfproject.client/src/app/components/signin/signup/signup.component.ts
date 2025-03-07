import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  providers: [ FormGroupName, FormControlName]
})
export class SignupComponent {
  signupForm: FormGroup;
  errorList: string[] = [];

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.signupForm = this.fb.group({
      login: new FormControl('', [ Validators.required]),
      password: new FormControl('', [ Validators.required]),
      repeatPassword: new FormControl('', [ Validators.required])
    });
  }

  onSubmit(): void {
    this.errorList = [];
    if (this.signupForm.valid) {
      if (this.signupForm.value.password !== this.signupForm.value.repeatPassword) {
        this.updateErrorList([{code: 'passwords-mismatch', description: 'Passwords do not match'}]);
        return;
      }
      this.authService.register(this.signupForm.value.login, this.signupForm.value.password).subscribe(response => {
      if (response.success) {
        console.log(response.message);
        this.signupForm.reset();
      } else {
        console.log(response);
        console.log('User registration failed', response.message);
        this.updateErrorList(response.message);
      }
      }),
      (error: any) => {
      console.log(error);
      }
    }
  }

  updateErrorList(errors: {code: string, description: string}[]): void {
    this.errorList = errors.map(error => error.description);
    console.log(this.errorList);
  }
}
