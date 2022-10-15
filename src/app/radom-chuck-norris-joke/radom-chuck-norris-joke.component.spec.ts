import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadomChuckNorrisJokeComponent } from './radom-chuck-norris-joke.component';

describe('RadomChuckNorrisJokeComponent', () => {
  let component: RadomChuckNorrisJokeComponent;
  let fixture: ComponentFixture<RadomChuckNorrisJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadomChuckNorrisJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadomChuckNorrisJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
