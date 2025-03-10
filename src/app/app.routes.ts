import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { AccountInfoByEmailComponent } from './components/account-info-by-email/account-info-by-email.component';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { TransferFundsComponent } from './components/transfer-funds/transfer-funds.component';
import { DepositFundsComponent } from './components/deposit-funds/deposit-funds.component';
import { WithdrawFundsComponent } from './components/withdraw-funds/withdraw-funds.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accounts', component: AccountsComponent, canActivate: [AuthGuard] },
  {
    path: 'create-account',
    component: CreateAccountComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'activate-account',
    component: ActivateAccountComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'account-info',
    component: AccountInfoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'account-info-by-email',
    component: AccountInfoByEmailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'account-balance',
    component: AccountBalanceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transfer-funds',
    component: TransferFundsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'deposit-funds',
    component: DepositFundsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'withdraw-funds',
    component: WithdrawFundsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transaction-history',
    component: TransactionHistoryComponent,
    canActivate: [AuthGuard],
  },
];
