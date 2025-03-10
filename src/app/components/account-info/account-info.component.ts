import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  imports: [CommonModule],
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  accounts: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getAccountInfo();
  }

  getAccountInfo() {
    this.taskService.getAccounts().subscribe({
      next: (response) => {
        console.log('Fetched Accounts:', response);
        this.accounts = response.accounts;
      },
      error: (error) => {
        console.error('Error fetching account info:', error);
      },
    });
  }
}
