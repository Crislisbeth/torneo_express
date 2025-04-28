import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectoresComponent } from './vectores.component';

describe('VectoresComponent', () => {
  let component: VectoresComponent;
  let fixture: ComponentFixture<VectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VectoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
