import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./transfer-funds.component.scss'],
})
export class TransferFundsComponent {
  amount: number = 0;
  message: string = '';
  account: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  transferFunds() {
    if (this.amount && this.account && this.message) {
      const transferData = {
        amount: this.amount,
        message: this.message,
        account: this.account,
      };

      this.taskService.transferFunds(transferData).subscribe({
        next: (response) => {
          console.log('Transfer successful:', response);
          alert('Transfer successful');
        },
        error: (error) => {
          console.error('Error during transfer:', error);
          alert('Transfer failed');
        },
      });
    } else {
      alert('Please fill out all fields');
    }
  }
}
