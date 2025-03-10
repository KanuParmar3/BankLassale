import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoByEmailComponent } from './account-info-by-email.component';

describe('AccountInfoByEmailComponent', () => {
  let component: AccountInfoByEmailComponent;
  let fixture: ComponentFixture<AccountInfoByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountInfoByEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountInfoByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
