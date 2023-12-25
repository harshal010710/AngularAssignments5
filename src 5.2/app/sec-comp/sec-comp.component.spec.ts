import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecCompComponent } from './sec-comp.component';

describe('SecCompComponent', () => {
  let component: SecCompComponent;
  let fixture: ComponentFixture<SecCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
