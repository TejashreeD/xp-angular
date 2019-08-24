import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiExampleComponent } from './rest-api-example.component';

describe('RestApiExampleComponent', () => {
  let component: RestApiExampleComponent;
  let fixture: ComponentFixture<RestApiExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApiExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApiExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
