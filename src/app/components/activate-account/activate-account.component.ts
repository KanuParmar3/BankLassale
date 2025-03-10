import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate-account',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss'],
})
export class ActivateAccountComponent implements OnInit {
  activateForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.activateForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      activationCode: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['email']) {
        this.activateForm.patchValue({ email: params['email'] });
      }
    });
  }

  activateAccount() {
    if (this.activateForm.invalid) return;

    const { email, activationCode } = this.activateForm.value;

    this.authService.activateAccount(email, activationCode).subscribe(
      (response: any) => {
        console.log('Account activated successfully', response);
        this.successMessage = 'Account activated successfully!';
        this.errorMessage = '';
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.error('Error activating account', error);
        this.errorMessage = 'Invalid activation code or email.';
        this.successMessage = '';
      }
    );
  }
}
