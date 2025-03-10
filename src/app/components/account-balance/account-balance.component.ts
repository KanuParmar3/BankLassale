import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class AccountBalanceComponent {
  balance: number | null = null;
  finalBalance: number | null = null;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private taskService: TaskService) {}

  getAccountBalance() {
    this.isLoading = true;
    this.taskService.getBalance().subscribe({
      next: (response) => {
        this.balance = response.balance;
        this.finalBalance = response.finalBalance;
        this.isLoading = false;
        console.log(
          'Fetched Account Balance:',
          this.balance,
          this.finalBalance
        );
      },
      error: (error) => {
        this.errorMessage = 'Error fetching account balance.';
        this.isLoading = false;
        console.error('Error fetching account balance:', error);
      },
    });
  }
}
