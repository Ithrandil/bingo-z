import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoContainerComponent } from './bingo-container.component';

describe('BingoContainerComponent', () => {
  let component: BingoContainerComponent;
  let fixture: ComponentFixture<BingoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
