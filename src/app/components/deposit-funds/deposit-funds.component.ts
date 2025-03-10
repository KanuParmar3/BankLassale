import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit-funds',
  templateUrl: './deposit-funds.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./deposit-funds.component.scss'],
})
export class DepositFundsComponent {
  amount: number = 0;
  message: string = '';
  email: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  depositFunds() {
    if (this.amount && this.email && this.message) {
      const depositData = {
        amount: this.amount,
        message: this.message,
        email: this.email,
      };

      this.taskService.depositFunds(depositData).subscribe({
        next: (response) => {
          console.log('Deposit successful:', response);
          alert('Deposit successful');
        },
        error: (error) => {
          console.error('Error during deposit:', error);
          alert('Deposit failed');
        },
      });
    } else {
      alert('Please fill out all fields');
    }
  }
}
