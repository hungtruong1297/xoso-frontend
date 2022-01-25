import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLotteryUserComponent } from './search-lottery-user.component';

describe('SearchLotteryUserComponent', () => {
  let component: SearchLotteryUserComponent;
  let fixture: ComponentFixture<SearchLotteryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLotteryUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLotteryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
