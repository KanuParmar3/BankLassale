import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [CommonModule],
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private taskService: TaskService,
    private router: Router
  ) {}
  navigateToAccountInfo() {
    this.router.navigate(['/account-info']);
  }
  navigateToAccountInfoByEmail() {
    this.router.navigate(['/account-info-by-email']);
  }
  navigateToAccountBalance() {
    this.router.navigate(['/account-balance']);
  }

  navigateToTransferFunds() {
    this.router.navigate(['/transfer-funds']);
  }

  navigateToDepositFunds() {
    this.router.navigate(['/deposit-funds']);
  }
  navigateToWithdrawFunds() {
    this.router.navigate(['/withdraw-funds']);
  }
  navigateToTransactionHistory() {
    this.router.navigate(['/transaction-history']);
  }
  navigateToHome() {
    this.router.navigate(['/accounts']);
  }

  logout() {
    this.authService.logout();
  }
}
