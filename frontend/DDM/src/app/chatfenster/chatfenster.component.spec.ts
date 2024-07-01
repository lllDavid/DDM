import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatfensterComponent } from './chatfenster.component';

describe('ChatfensterComponent', () => {
  let component: ChatfensterComponent;
  let fixture: ComponentFixture<ChatfensterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatfensterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatfensterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
