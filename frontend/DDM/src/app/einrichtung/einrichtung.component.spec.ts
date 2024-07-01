import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinrichtungComponent } from './einrichtung.component';

describe('EinrichtungComponent', () => {
  let component: EinrichtungComponent;
  let fixture: ComponentFixture<EinrichtungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EinrichtungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EinrichtungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
