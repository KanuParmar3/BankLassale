import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-info-by-email',
  templateUrl: './account-info-by-email.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./account-info-by-email.component.scss'],
})
export class AccountInfoByEmailComponent {
  emailInput: string = '';
  selectedAccount: any = null;

  constructor(private taskService: TaskService) {}

  getAccountByEmail() {
    if (this.emailInput) {
      this.taskService.getAccountByEmail(this.emailInput).subscribe({
        next: (response) => {
          this.selectedAccount = response;
          console.log('Fetched Account by Email:', this.selectedAccount);
        },
        error: (error) => {
          console.error('Error fetching account by email:', error);
        },
      });
    }
  }
}
