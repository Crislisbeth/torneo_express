import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosCreadorComponent } from './terminos-creador.component';

describe('TerminosCreadorComponent', () => {
  let component: TerminosCreadorComponent;
  let fixture: ComponentFixture<TerminosCreadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminosCreadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminosCreadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
