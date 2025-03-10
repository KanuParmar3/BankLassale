import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw-funds',
  templateUrl: './withdraw-funds.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./withdraw-funds.component.scss'],
})
export class WithdrawFundsComponent {
  amount: number = 0;
  constructor(private taskService: TaskService, private router: Router) {}

  withdrawFunds() {
    if (this.amount) {
      const withdrawData = {
        amount: this.amount,
      };

      this.taskService.withdrawFunds(withdrawData).subscribe({
        next: (response) => {
          console.log('Withdrawal successful:', response);
          alert('Withdrawal successful');
        },
        error: (error) => {
          console.error('Error during withdrawal:', error);
          alert('Withdrawal failed');
        },
      });
    } else {
      alert('Please enter an amount');
    }
  }
}
