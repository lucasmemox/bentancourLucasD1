import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCursoComponent } from './inicio-curso.component';

describe('InicioCursoComponent', () => {
  let component: InicioCursoComponent;
  let fixture: ComponentFixture<InicioCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
