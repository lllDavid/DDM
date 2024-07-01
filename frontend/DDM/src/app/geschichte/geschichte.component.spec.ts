import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeschichteComponent } from './geschichte.component';

describe('GeschichteComponent', () => {
  let component: GeschichteComponent;
  let fixture: ComponentFixture<GeschichteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeschichteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeschichteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
