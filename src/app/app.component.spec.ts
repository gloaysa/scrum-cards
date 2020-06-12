import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('selectCard', () => {
    it('should set selectedCard with the number passed', () => {
      component.selectCard(2);
      expect(component.selectedCard).toBe(2);
    });
  });
});
