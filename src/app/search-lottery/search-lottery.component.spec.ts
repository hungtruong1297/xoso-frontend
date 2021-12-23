import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLotteryComponent } from './search-lottery.component';

describe('SearchLotteryComponent', () => {
  let component: SearchLotteryComponent;
  let fixture: ComponentFixture<SearchLotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLotteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
