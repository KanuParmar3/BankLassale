import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  createAccountForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createAccountForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobilePhone: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  createAccount() {
    if (this.createAccountForm.invalid) {
      return;
    }

    const accountData = this.createAccountForm.value;

    this.authService.createAccount(accountData).subscribe(
      (response: any) => {
        console.log('Account created successfully', response);
        // Handle successful account creation (e.g., navigate to login page)
        this.router.navigate(['/activate-account'], {
          queryParams: { email: accountData.email },
        });
      },
      (error: any) => {
        console.error('Error creating account', error);
        this.errorMessage = 'Error creating account. Please try again later.';
      }
    );
  }
}
