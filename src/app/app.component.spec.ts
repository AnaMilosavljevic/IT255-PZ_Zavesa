import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule, 
        ReactiveFormsModule, 
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should add a new flight when form is submitted with valid data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const descriptionInput: HTMLInputElement = fixture.nativeElement.querySelector('#description');
    descriptionInput.value = 'Test Flight';
    descriptionInput.dispatchEvent(new Event('input'));

    const roomnoInput: HTMLInputElement = fixture.nativeElement.querySelector('#roomno');
    roomnoInput.value = 'ABC123';
    roomnoInput.dispatchEvent(new Event('input'));

    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();

    fixture.detectChanges();

    const roomElements: HTMLElement[] = fixture.nativeElement.querySelectorAll('.room');
    expect(roomElements.length).toBe(4); 
  });

  it('should not add a new flight when form is submitted with invalid data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const descriptionInput: HTMLInputElement = fixture.nativeElement.querySelector('#description');
    descriptionInput.value = ''; 
    descriptionInput.dispatchEvent(new Event('input'));

    const roomnoInput: HTMLInputElement = fixture.nativeElement.querySelector('#roomno');
    roomnoInput.value = 'ABC'; 
    roomnoInput.dispatchEvent(new Event('input'));

    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();

    fixture.detectChanges();

    const roomElements: HTMLElement[] = fixture.nativeElement.querySelectorAll('.room');
    expect(roomElements.length).toBe(3); 
  });
});
