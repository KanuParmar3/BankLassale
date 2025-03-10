import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent {
  days: number = 30;
  transactions: any[] = [];

  constructor(private taskService: TaskService) {}

  getTransactionHistory() {
    this.taskService.getTransactionHistory(this.days).subscribe({
      next: (response) => {
        this.transactions = response.statement;
        console.log('Transaction History:', this.transactions);
      },
      error: (error) => {
        console.error('Error fetching transaction history:', error);
      },
    });
  }
}
