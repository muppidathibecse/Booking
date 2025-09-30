import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diplaytickets } from './diplaytickets';

describe('Diplaytickets', () => {
  let component: Diplaytickets;
  let fixture: ComponentFixture<Diplaytickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diplaytickets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diplaytickets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
