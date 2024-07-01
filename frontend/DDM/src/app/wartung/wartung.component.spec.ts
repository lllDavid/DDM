import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WartungComponent } from './wartung.component';

describe('WartungComponent', () => {
  let component: WartungComponent;
  let fixture: ComponentFixture<WartungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WartungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WartungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
