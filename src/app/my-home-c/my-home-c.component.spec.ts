import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomeCComponent } from './my-home-c.component';

describe('MyHomeCComponent', () => {
  let component: MyHomeCComponent;
  let fixture: ComponentFixture<MyHomeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHomeCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
