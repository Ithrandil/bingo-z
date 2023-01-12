import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoBoxComponent } from './bingo-box.component';

describe('BingoBoxComponent', () => {
  let component: BingoBoxComponent;
  let fixture: ComponentFixture<BingoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
